// src/users/schemas/user.schema.ts

import { Schema, Document, model } from 'mongoose'; 

// Define the User interface extending Mongoose's Document
export interface User extends Document {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  createdAt: Date;
}

// Define the schema for User
export const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
}, {
  timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
});

// This is automatically inferred, no need to manually create UserModel
export type UserDocument = User & Document;  // Combine the User interface with Mongoose's Document type
