"use server"
import { revalidatePath } from "next/cache";
import { connectDB } from "../database/MongoConnect";
import Comment from "../database/models/commentModel/comment";

// for create the comment
export const addComment = async (formData) => {
    const commentDescription = formData.get("commentDescription");
    const ratingNumber = formData.get("ratingNumber");
    // console.log(commentDescription, ratingNumber);
    try {
      await connectDB();
      // data to be save in db
      const comment = {
        commentDescription: commentDescription,
        ratingNumber: ratingNumber,
      };
      const result = await Comment.create(comment);
      return JSON.parse(JSON.stringify({ success: true, data: result }));


    } catch (error) {
      return {
        error: "Fill input properly or send the required data",
        errorDetails: JSON.stringify(error),
      };
    }
  };

// for get the comments
export const getComment = async () =>{
    try{
        await connectDB();
        const result = await Comment.find();
        revalidatePath("/allBooks/[id]");
        return JSON.parse(JSON.stringify({ success: true, data: result }));
    }catch(error){
        return JSON.parse(JSON.stringify(error));
    }
}  