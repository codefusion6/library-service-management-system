const { model, models, Schema } = require(mongoose);

const BookSchema = new Schema({
  bookName: { type: String, required: true },
  authorName: { type: String, required: true },
  bookDescription: { type: String, required: true },
  bookCover: { type: Buffer, required: true },
  bookPdf: { type: Buffer, required: true },
  authorImage: { type: Buffer, required: true },
  publisherEmail: { type: String, required: true },
  category: { type: String, required: true, enum: ["Basic", "Plus", "Elite"] },
});

const Book = models.Book || model("Book", BookSchema);

export default Book;
