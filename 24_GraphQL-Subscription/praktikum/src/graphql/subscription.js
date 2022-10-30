import { gql } from "@apollo/client";

export const passengerSubscription = gql`
subscription MySubscription {
    passenger_pasengerList {
      id
      jenisKelamin
      nama
      umur
    }
  }
`
