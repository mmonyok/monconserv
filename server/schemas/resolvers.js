import { Comment, User } from '../models/index.js';
import { authorization } from '../utils/auth.js';
const { signToken } = authorization;

export const resolvers = {
  Query: {
    getComments: async (parent, args, { user }) => {
      return Comment.find().populate('replies');
    }
  },
  Mutation: {
    logIn: async (parent, args) => {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        return { message: "Can't find this user." };
      }

      const correctPw = await user.isCorrectPassword(args.password);
      if (!correctPw) {
        return { message: 'Wrong password!' };
      }
      const token = signToken(user);
      return { token, user };
    },
    newComment: async (parent, args) => {
      const comment = await Comment.create(args);
      if (!comment) {
        return { message: 'Something is wrong!' };
      }
      return comment;
    },
    // I have no idea if this is correct.
    removeComment: async (parent, args, { comment }) => {
      Comment.deleteOne({ _id: comment._id })
    },
    replyComment: async (parent, args, { comment }) => {
      const commentReply = await Comment.findOneAndUpdate(
        { _id: comment._id },
        { $addToSet: { replies: args } },
        { new: true, runValidators: true }
      );
      if (!commentReply) {
        return { message: "Reply to comment could not be made." };
      }
      return commentReply;
    }
  }
};
// need to figure out mutation for editing replies.