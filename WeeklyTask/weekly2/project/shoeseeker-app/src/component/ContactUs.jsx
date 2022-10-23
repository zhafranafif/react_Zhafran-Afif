import React from 'react'
import { useState } from 'react'
import ContactUsBanner from '../assets/img/5421734_2839829.png'

const ContactUs = () => {
  const data = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  }
  const [clientValue, setClientValue] = useState(data)

  const handleOnChange = (e) => {
    const { name, value } = e.target
    
    setClientValue({
      ...clientValue,
      [name]: value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (clientValue.firstName === "" || clientValue.lastName === "" || clientValue.email === "" || clientValue.message === "") {
      alert('Silahkan isi data pada form tersebut dahulu yaa! :)')
    } else {
      alert(`
      Nama: ${clientValue.firstName} ${clientValue.lastName},
      Email: ${clientValue.email}
      Message: ${clientValue.message}

      Hey ${clientValue.firstName}${clientValue.lastName}!, Thanks for Submitting this form, we will
    inform you a further information!
      `)
    }
  }

  return (
      <>
        <h2>Contact Us</h2>
        <div className="contact-us__container">
          <div className="contact-us__img">
            <img src={ContactUsBanner} alt="" />
          </div>
          <div className="contact-us__form">
            <form onSubmit={handleOnSubmit} id="Form">
              <div className="mb-3">
                <label htmlFor="exampleInputFirstName1" className="form-label">First Name</label>
                <input type="text" className="form-control" id="exampleInputFirstName1" name="firstName" onChange={handleOnChange} value={clientValue.firstName} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputLastName1" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="exampleInputLastName1" name="lastName" onChange={handleOnChange} value={clientValue.lastName} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={handleOnChange} value={clientValue.email} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputMessage1" className="form-label">What can web help you with?</label>
                <textarea type="text" className="form-control" id="exampleInputMessage1" rows={4} name="message" placeholder="Please drop your message in here!" defaultValue={""} onChange={handleOnChange} value={clientValue.message}/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </>
  )
}

export default ContactUs