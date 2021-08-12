import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $dob: String!, $timeOfBirth: String!, $timezone: String!, $placeOfBirth: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password, dob: $dob, timeOfBirth: $timeOfBirth, timezone: $timezone, placeOfBirth: $placeOfBirth) {
      token
      user {
        _id
        name
        email
        dob,
        timeOfBirth,
        placeOfBirth
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        dob
        timeOfBirth
        placeOfBirth
      }
    }
  }
`;
