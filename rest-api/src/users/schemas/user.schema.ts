import {Schema} from "mongoose";

export const userSchema = new Schema({
    username: String,
    password:String,
    email:String,
    role:String,
    phone_number:String
})