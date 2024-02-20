import { model, models, Schema } from "mongoose";

const UserProfileSchema = new Schema ({
    userName: { type : String , required : true },
    bio: { type: String, required: true},
    about : { type: String, required: true},
    category: { type: String, required: true, enum: ["Dhaka", "Barishal", "Khulna", "Jossore", "Mymangsing", "Gazipur", "Sylhet", "Chittagonj"]},

})

const EditProfile = models.EditProfile || model("EditProfile", UserProfileSchema)

export default EditProfile;