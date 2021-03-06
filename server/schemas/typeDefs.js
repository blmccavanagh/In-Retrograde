const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    # There is now a field to store the user's password
    password: String
    dob: String
    timeOfBirth: String
    timezone: String
    placeOfBirth: String
    birthLongitude: String
    birthLatitude: String 
  }

  # Set up an Auth type to handle returning data from a user creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    # Set up mutations to handle creating a user or logging into a user and return Auth type
    addUser(name: String!, email: String!, dob: String!, timeOfBirth: String!, timezone: String!, placeOfBirth: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;