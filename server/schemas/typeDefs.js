const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
  }
  type Comment {
    _id: ID!
    content: String!
    name: String!
    date: Date!
    replies: [Reply]
  }
  type Reply {
    id: ID!
    content: String!
    name: String!
    date: Date!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    getComments: Comment
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    newComment(id: ID,
      content: String,
      name: String,
      date: Date,
      ): Comment
    removeComment(id: ID): Comment
    replyComment(id: ID,
      content: String,
      name: String,
      date: Date): Comment
  }
`;

// need to figure out the typeDef for editing a reply comment.