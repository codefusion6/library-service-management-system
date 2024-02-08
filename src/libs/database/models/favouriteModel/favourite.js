const { Schema, models, model } = require("mongoose")


const favouriteSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensure each user has only one favorite entry
    },
    bookIds: {
        type: [Schema.Types.ObjectId],
        default: [],
    },
})
const Favourite = models.Favourite || model("Favourite", favouriteSchema)

export default Favourite

