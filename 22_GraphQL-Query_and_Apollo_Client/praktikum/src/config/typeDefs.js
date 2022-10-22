import { gql} from "@apollo/client";

export const getAllPassenger = gql`
    query MyQuery {
    passenger_pasengerList {
      id
      jenisKelamin
      nama
      umur
    }
  }
`
export const getPassengerById = gql`
query MyQuery ($id: Int!){
    passenger_pasengerList(where: {id: {_eq: $id}}) {
      id
      jenisKelamin
      nama
      umur
    }
  }    
`