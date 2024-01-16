import { mongoose } from "mongoose";

const featuresSchema = new mongoose.Schema({
    features: {
        type: String,
        require: true
    }
})


const Features = mongoose.model("Features", featuresSchema)
export default Features;