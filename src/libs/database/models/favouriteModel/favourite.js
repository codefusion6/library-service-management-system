const { Schema, models, model } = require("mongoose")


const favouriteSchema = new Schema({
    userEmail: { type: String },
    bookId: { type: String }
})

const Favourite = models.Favourite || model("Favourite", favouriteSchema)

export default Favourite

