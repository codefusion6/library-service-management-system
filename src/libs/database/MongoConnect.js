// db.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI)

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
  // console.log("Newly Connected");
  cached.conn = await cached.promise;

  return cached.conn;
}




// import mongoose from "mongoose";

// const MONGODB_URI =
//   process.env.MONGODB_URI

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// async function connect() {
//   try {
//     await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// export { connect };
