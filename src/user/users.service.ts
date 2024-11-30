// src/users/users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';  // Import InjectModel from @nestjs/mongoose
import { Model } from 'mongoose';  // Import Model from mongoose
// import { UserDocument } from './schemas/user.schema';  
// User schema and document type
import { UserDocument } from './user.schema';
import { UserDto } from './dto/user.dto';  // Assuming you have a DTO for User

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) {}  // Inject the Mongoose model
  
  // Create a new user
  async create(userData: UserDto): Promise<UserDto> {
    console.log('Received data:', userData);  // Log the incoming data
    const createdUser = new this.userModel(userData);  // Create a new user instance
    return createdUser.save();  // Save the user to MongoDB
  }

  // Find a user by email
  async findByEmail(email: string): Promise<UserDto | null> {
    return this.userModel.findOne({ email }).exec();  // Find a user by email
  }

  // Get all users
  async findAll(): Promise<UserDto[]> {
    return this.userModel.find().exec();  // Retrieve all users
  }

  // Update user by ID
  async update(id: string, userData: Partial<UserDto>): Promise<UserDto | null> {
    return this.userModel.findByIdAndUpdate(id, userData, { new: true }).exec();  // Update user by ID
  }

  // Delete user by ID
  async delete(id: string): Promise<UserDto | null> {
    return this.userModel.findByIdAndDelete(id).exec();  // Delete user by ID
  }
}
