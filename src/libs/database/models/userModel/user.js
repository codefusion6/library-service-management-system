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
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
<<<<<<< HEAD
=======


>>>>>>> 7b63849a3212cb86a6331d5e9fd2382bba3cc21d
