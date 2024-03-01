const { Schema, models, model  } = require("mongoose");

const BookRequestSchema = new Schema({
    bookName: { type: String, required: true },
    authorName: { type: String, required: true },
    email: { type: String, required: true },
    userEmail: { type: String, required: true },
    requestSMS: { type: String, required: true },
    status: { type: String, default: 'pending' },
});

const BookRequest = models.BookRequest || model("BookRequest", BookRequestSchema)

export default BookRequest;
