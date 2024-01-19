const { Schema, model, models } = require("mongoose");

const featuresSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
})


const Feature = models?.Feature || model("Feature", featuresSchema)

export default Feature;