import { gql } from "@apollo/client";

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

export const updatePassengerById = gql`
mutation MyMutation($id: Int, $jenisKelamin: String, $nama: String, $umur: Int) {
  update_passenger_pasengerList(where: {id: {_eq: $id}},_set: {id: $id, jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur}) {
    returning {
      id
      jenisKelamin
      nama
      umur
    }
  }
}
`