import { mongoose } from "mongoose";
import { Schema } from "mongoose";
const featuresSchema = new Schema({
    featureType: {
        type: String,
        require: true
    }
})


export const Feature = mongoose.model("Feature", featuresSchema)
