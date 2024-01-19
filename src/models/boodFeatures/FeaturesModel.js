const { Schema, model, models } = require("mongoose");

const featuresSchema = new Schema({
    book: {
        bookName: String,
        type: String,
        createdBy: String,
        price: Number,
        startMarking: Number,
        image: String,
    }
})


const Feature = models?.Feature || model("Feature", featuresSchema)

export default Feature;