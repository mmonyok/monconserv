import mongoose from 'mongoose';
const { Schema } = mongoose;

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the Comment's `replies` array in Comment.js
export const replySchema = new Schema({
  content: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    default: "Joe Monyok"
  },
  date:{
    type: Date,
    default: Date.now
  }
});