// src/users/users.service.ts

import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { User } from './user.schema';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userModel: UserModel) {}

  async create(userData: UserDto): Promise<UserDto> {
    console.log('Received data:', userData);  // Log the incoming data
    const newUser = await this.userModel.create(userData);
    return newUser;
  }
  // Find a user by email
  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findByEmail(email);
  }

  // Get all users
  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  // Update user by ID
  async update(id: string, userData: Partial<User>): Promise<User | null> {
    return this.userModel.updateById(id, userData);
  }

  // Delete user by ID
  async delete(id: string): Promise<User | null> {
    return this.userModel.deleteById(id);
  }
}
