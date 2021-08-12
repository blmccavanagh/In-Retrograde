import { gql } from '@apollo/client';



//  new query QUERY_HOROSCOPE 
// this goes to backend resolver
// in the backend resolver is where you call the api
// make sure typedefs are working, look inside api response, think about what you need to display

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
    }
  }
`;
