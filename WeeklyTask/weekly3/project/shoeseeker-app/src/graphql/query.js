import { gql } from '@apollo/client';

export const getAllUsers = gql`
query MyQuery {
    aboutus_aboutus_list {
      id
      createdAt
      Name
      Avatar
    }
  }
`