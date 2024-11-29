// src/users/models/user.model.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { User } from '../schemas/user.schema';  // Import the User schema
import { User } from './user.schema';

@Injectable()
export class UserModel {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  // Create a new user
  async create(userData: Partial<User>): Promise<User> {
    const newUser = new this.userModel(userData);
    return newUser.save();  // Save the user to the database and return the saved document
  }
  // Find a user by email
  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  // Find all users
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Update user by ID
  async updateById(id: string, userData: Partial<User>): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, userData, { new: true }).exec();
  }

  // Delete user by ID
  async deleteById(id: string): Promise<User | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
