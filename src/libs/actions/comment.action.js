import { connectDB } from "../database/MongoConnect";
import Comment from "../database/models/commentModel/comment";

// for create the comment
export const addComment = async (formData) => {

  const commentDescription = await formData.get("commentDescription");
  console.log(commentDescription)
  try {
    await connectDB();
    // data to be save in db
    const comment = {
      commentDescription: commentDescription,
    };
    const result = await Comment.create(comment);
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return {
      error: "Fill input properly or send the required data",
      errorDetails: JSON.parse(JSON.stringify(error)),
    };
  }
};

// for get the comments
export const getComment = async () => {
  try {
    await connectDB();
    const result = await Comment.find();
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
}  