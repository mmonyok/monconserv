import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
  }
  type Comment {
    _id: ID!
    content: String!
    name: String!
    date: String!
    replies: [Reply]
  }
  type Reply {
    _id: ID!
    content: String!
    name: String!
    date: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    getComments: Comment
  }
  type Mutation {
    logIn(
      email: String!,
      password: String!
      ): Auth
    newComment(
      content: String!,
      name: String!,
      date: String!
      ): Comment
    removeComment(id: ID): Comment
    replyComment(
      _id: ID!,
      content: String!,
      name: String!,
      date: String!
      ): Comment
  }
`;