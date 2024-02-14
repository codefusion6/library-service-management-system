import { model, models, Schema } from "mongoose";

const CommentSchema = new Schema({
  commentDescription: { type: String, required: true },
});

const BookComment = models.BookComment || model("BookComment", CommentSchema);

export default BookComment;