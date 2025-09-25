import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telephone: {
            type: String,
            required: true
        },
        abonner:{
            type: Boolean,
            required: false
        },
    }
)
export default mongoose.model("Users",userSchema)


