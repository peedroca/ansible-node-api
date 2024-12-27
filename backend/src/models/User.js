import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 18, index: true },
});

export const UserModel = mongoose.model('User', userSchema);