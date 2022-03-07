import mongoose from 'mongoose';
const { Schema } = mongoose;
// import { replySchema } from './Reply.js';

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

/* const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  replies: [replySchema]
}); */

export const Comment = mongoose.model('Comment', commentSchema);