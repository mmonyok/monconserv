const { Schema, model } = require('mongoose');
const replySchema = require('./Reply');

const commentSchema = new Schema(
  {
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
  }
);

const Comment = model('Comment', commentSchema);

module.exports = commentSchema;