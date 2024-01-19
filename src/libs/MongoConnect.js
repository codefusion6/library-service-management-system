import mongoose from "mongoose";

export async function dbConnect() {
    try {

        // await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        // console.log("connected with mongodb");
        mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB Connected Successfully");
        });
        connection.on("error", (err) => {
            console.log(
                "MongoDB connection error, please make sure mongoDB is ruuning." + err
            );
            // process.exit();
        });
    } catch (err) {
        console.log(err.message);
    }
}
