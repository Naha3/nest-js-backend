// src/user/user.schema.ts
import { Schema, Document, model } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  createdAt: Date;
}

export const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
}, {
  timestamps: true, 
});

export type UserDocument = User & Document;  // Use 'UserDocument' to type the Mongoose model

export const User = model<UserDocument>('User', UserSchema);
