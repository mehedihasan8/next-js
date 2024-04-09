import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  contant: string;
  createdAt: Date;
}

const MessageSchem: Schema<Message> = new Schema({
  contant: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}

const UserSchem: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email addrress"],
  },
  password: { type: String, required: [true, "Password is required!"] },
  verifyCode: { type: String, required: [true, "Verify Code is required!"] },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify Code Expiry  is required!"],
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchem],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchem);

export default UserModel;
