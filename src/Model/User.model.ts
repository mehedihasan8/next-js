import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  contant: string;
  createAt: Date;
}
