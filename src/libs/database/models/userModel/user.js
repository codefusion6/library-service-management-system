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
    role: {
      type: String,
      required: true,
    },
    photoURL: {
      type: String, 
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;