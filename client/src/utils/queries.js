import { gql } from '@apollo/client';

export const GET_COMMENTS = gql`
  query comment {
    allComments {
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