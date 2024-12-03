import { Schema, Document } from 'mongoose';
import { User } from 'src/user/user.schema'; // Assuming you have a User entity

export const SongSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
});

export interface Song extends Document {
  title: string;
  artist: string;
  userId: string; // This should reference the User model's ID
}
