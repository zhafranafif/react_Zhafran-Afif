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

export const deletePassengerById = gql`
mutation MyMutation($id: Int!) {
  delete_passenger_pasengerList(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
`
export const insertPassengerById = gql`
mutation MyMutation ($nama: String, $umur: Int, $jenisKelamin: String){
  insert_passenger_pasengerList_one(object: {nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin}) {
    id
  }
}
`
