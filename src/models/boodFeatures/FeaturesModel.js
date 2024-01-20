const { Schema, model, models } = require("mongoose");

const featuresSchema = new Schema({
    Feature: {
        bookName: { type: String },
        type: { type: String },
        createdBy: { type: String },
        price: { type: Number },
        startMarking: { type: String },
        image: { type: String },
    }
})


const Feature = models?.Feature || model("Feature", featuresSchema)

export default Feature;