// import mongoose from "mongoose";


// export const ConnectMongoDb = async () => {
//     if (mongoose.connection.readyState === 1) {
//         return mongoose.connection.asPromise();
//     }
//     return await mongoose.connect(process.env.MONGO_URL)
// }

// import mongoose from "mongoose";
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//     } catch (err) {
//         throw new Error("Connection Failed" + err);
//     }
// };
// export default connectDB;


export async function dbConnect() {
    try {
        mongoose.connect(process.env.DB_URL);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB Connected Successfully");
        });

        connection.on("error", (err) => {
            console.log(
                "MongoDB connection error, please make sure mongoDB is ruuning." + err
            );
            process.exit();
        });
    } catch (err) {
        console.log(err.message);
    }
}