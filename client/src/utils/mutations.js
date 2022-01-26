import { gql } from '@apollo/client';

export const LOG_IN = gql`
  mutation logIn(
    $email: String!,
    $password: String!) {
      logIn(
        email: $email,
        password: $password) {
          token
          user {
            _id
            name
            email
          }
        }
    }
`;

export const NEW_COMMENT = gql`
  mutation newComment(
    $content: String!,
    $name: String!,
    $date: Date!) {
      newComment(
        content: $content,
        name: $name,
        date: $date)
    }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment(
    $_id: ID) {
      removeComment(
        _id
        content
        name
        date
        replies) {
          id
          content
          name
          date
        }
    }
`;

export const REPLY_COMMENT = gql`
  mutation replyComment(
    $content: String!,
    $name: String!,
    $date: Date) {
      replyComment(
        content: $content,
        name: $name,
        date: $date) {
          _id
          content
          name
          date
          replies {
            _id
            content
            name
            date
          }
        }
    }
`;