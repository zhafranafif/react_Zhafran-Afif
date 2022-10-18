import ListItem from './ListItem';
import { getPassengerById } from '../config/typeDefs';
import { useLazyQuery } from '@apollo/client';
import Loading from './Loading';
import { useState } from 'react';
const ListPassenger = props => {
    const [getPassenger, { data, error, loading }] = useLazyQuery(getPassengerById)
    const [passengerID, setPassengerID] = useState(0)
    
    if (error) {
        console.log(error)
        return null
    }
    if (loading) {
        return <Loading />
    }

    const onGetPassengerDataById = () => {
        getPassenger({
            variables: {
                id: passengerID
            }
        })
    }

    const onChangePassengerID = (e) => {
        if (e.target) {
            setPassengerID(e.target.value)
        }
    }

    
    return (
        <div>
            <div className='input-container'>
            <input value={passengerID} onChange={onChangePassengerID}></input>
                <button onClick={onGetPassengerDataById}>Getting Passenger Data</button>
            </div>
            <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {data?.passenger_pasengerList.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                    />
                ))}
            </table>
        </div>
    )
}

export default ListPassenger;