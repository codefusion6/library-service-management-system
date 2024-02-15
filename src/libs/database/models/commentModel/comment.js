import { model, models, Schema } from "mongoose";

const CommentSchema = new Schema({
<<<<<<< HEAD
    commentDescription: { type: String, required: true },
=======
  commentDescription: { type: String, required: true },
  ratingNumber: { type: Number, required: true },
>>>>>>> 771b9521d812e596e259164440c5315830b16a69
});

const BookComment = models.BookComment || model("BookComment", CommentSchema);

export default BookComment;
