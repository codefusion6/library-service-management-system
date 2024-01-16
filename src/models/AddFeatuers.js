import mongoose, { Mongoose, model } from "mongoose";

const featuresSchema = new mongoose.Schema({
    features: {
        type: String,
        require: true
    }
})


const Features = Mongoose.model("Features", featuresSchema)
export default Features;