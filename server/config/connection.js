import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/monconserv');

export const db = mongoose.connection;