import { model, models, Schema } from "mongoose";

const CommentSchema = new Schema({
  commentDescription: { type: String, required: true },
});

const Comment = models.Comment || model("Comment", CommentSchema);

export default Comment;
