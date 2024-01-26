import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
<<<<<<< HEAD
    
=======
>>>>>>> 43c41c7ce737b18f87b2b29540cf1a41e356ebfc
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
