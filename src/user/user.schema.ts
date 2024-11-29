// src/users/schemas/user.schema.ts

import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema(
  {
    name: { type: String, required: true },  // Ensure `required: true` is set
    email: { type: String, required: true, unique: true },  // Ensure `required: true` is set
    password: { type: String, required: true },  // Ensure `required: true` is set
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  },
);

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  createdAt: Date;
}
