const { Schema, models, model  } = require("mongoose");

const BookRequestSchema = new Schema({
    bookName: { type: String, required: true },
    authorName: { type: String, required: true },
    requestSMS: { type: String, required: true },
});

const BookRequest = models.BookRequest || model("BookRequest", BookRequestSchema)

export default BookRequest;
