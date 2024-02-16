import { model, models, Schema } from "mongoose";

const CommentSchema = new Schema({
<<<<<<< HEAD
  commentDescription: { type: String, required: true },
}, );

const BookComment = models.BookComment || model("BookComment", CommentSchema);
=======
    commentDescription: { type: String, required: true },
});
>>>>>>> 8b9d5489f602cf5195d44f6ef473c02b945c8319

export default BookComment;
