import { useRef, useState } from 'react';
import './App.css';

function App() {
  
  const baseData = {
      nama : "",
      email : "",
      noHandphone : "",
      pendidikan : "",
      kelas : "",
      harapan : "",
  }
  


  const suratKesungguhan = useRef('')

  const [data, setData] = useState(baseData)
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState('')
  const [errorMessageName, setErrorMessageName] = useState('')
  const [errorMessageEmail, setErrorMessageEmail] = useState('')
  const [errorMessageHandphone, setErrorMessageHandphone] = useState('')

  const handleInput = (event) => {
    const name = event.target.name
    const value = event.target.value

    setData({
      ...data,
      [name] : value
    })
  }
  const nameHandleInput = (event) => {
    setData({
      ...data,
      nama : event.target.value
    })
    if (event.target.value.match(/^[A-Za-z ]*$/)) {
      setErrorMessageName("")
    } else {
      setErrorMessageName('Anda harus menggunakan huruf!')
    }
  }

  const emailHandleInput = (event) => {
    setData({
      ...data,
      email : event.target.value
    })
    if (event.target.value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      setErrorMessageEmail('')
    } else {
      setErrorMessageEmail('Email yang anda masukkan tidak valid!')
    }
  }

  const numberHandleInput = (event) => {
    setData({
      ...data,
      noHandphone : event.target.value
    })
    if (event.target.value.match(/^[0-9]{9,14}$/)) {
      setErrorMessageHandphone('')
    } else {
      setErrorMessageHandphone('No handphone harus berupa number dan memiliki panjang minimal 9 angka!')
    }
  }
  
  const handleSubmit = (event) => {
    if (errorMessageName !== '') {
      setErrorMessage(alert('Data pendaftar tidak sesuai!'))
    } else if (errorMessageEmail !== ''){
      setErrorMessage(alert('Data pendaftar tidak sesuai!'))
    } else if (errorMessageHandphone !== '') {
      setErrorMessage(alert('Data pendaftar tidak sesuai!'))
    } else {
      setErrorMessage(alert(`Data pendaftar "${data.nama}" Berhasil Diterima!`))
    }
    event.preventDefault()
  }

  const resetData = () => {
    setData(baseData)
    setErrorMessage('')
  }
  

  return (
    <>
      <h2>Pendaftaran Peserta Coding Bootcamp</h2>
      <div className='form-input'>
        <form onSubmit={handleSubmit}>
          <label>Nama Lengkap :
            <input
              type="text"
              name='nama'
              value={data.nama}
              onChange={nameHandleInput}
              required
            >
            </input>
            <span className='name-span'>{errorMessageName}</span>
          </label>
          <label>Email :
            <input
              type="email"
              name='email'
              value={data.email}
              onChange={emailHandleInput}
              required
            >
            </input>
            <span className='email-span'>{errorMessageEmail}</span>
          </label>
          <label>No Handphone :
            <input
              type="text"
              name='noHandphone'
              value={data.noHandphone}
              onChange={numberHandleInput}
              required
            >
            </input>
          <span className='handphone-span'>{errorMessageHandphone}</span>
          </label>
          <label>Latar Belakang Pendidikan :
            <div  className='radio-label'>
          <label>
          <input
              type="radio"
              name='pendidikan'
              value={data.pendidikan}
              onChange={handleInput}
              required
              className='radio-btn'
          /> IT</label>
            <label>
          <input
              type="radio"
              name='pendidikan'
              value={data.pendidikan}
              onChange={handleInput}
              required
              className='radio-btn'
                /> Non IT</label>
              </div>
            </label>
          <label>Kelas Coding yang Dipilih :
            <select
              onChange={handleInput}
              required
            >
              <option name="kelas" value={data.kelas}>Coding Backend With Golang</option>
              <option name="kelas" value={data.kelas}>Coding FrontEnd With ReactJS</option>
              <option name="kelas" value={data.kelas}>Fullstack Developer</option>
           </select>
          </label>
          <label>
            Foto Surat Kesungguhan :
            <input
              type="file"
              ref={suratKesungguhan}
              required
            >
            </input>
          </label>
          <label>
            Harapan untuk Coding Bootcamp ini :
            <textarea
              rows="10"
              cols="50"
              name='harapan'
              value={data.harapan}
              onChange={handleInput}
            >
            </textarea>
          </label>
          <div className='btn'>
        <button type='submit' value="Submit" className='submit-btn'>Submit</button>
        <button className='reset-btn' onClick={resetData}>Reset</button>
        </div>
        </form>
      </div>
    </>
  );
}

export default App;
