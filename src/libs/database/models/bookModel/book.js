const { model, models, Schema } = require("mongoose");

const BookSchema = new Schema({
  bookName: { type: String, required: true },
  authorName: { type: String, required: true },
  bookDescription: { type: String, required: true },
  bookCover: { type: String, required: true },
  bookPdf: { type: String, required: true },
  authorImage: { type: String, required: true },
  publisherEmail: { type: String, required: true },
  category: { type: String, required: true, enum: ["Basic", "Plus", "Elite"] },
  type: { type: String, required: true, enum: ["Recommended", "Featured"] },
});

const Book = models.Book || model("Book", BookSchema);

export default Book;
