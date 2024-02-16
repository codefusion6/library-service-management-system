// db.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
// console.log(MONGODB_URI)
let cached = global.mongoose || { conn: null, promise: null };

export const connectDB = async () => {
  if (cached.conn) {
    console.log("Already Connected");
    return cached.conn
  };
  
  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');
  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
  })
  console.log("Newly Connected");
  cached.conn = await cached.promise;
  return cached.conn;
}

