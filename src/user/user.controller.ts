// src/users/user.controller.ts

import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';  // Import the UserDto for Swagger
import { CreateUserResponseDto, DeleteUserResponseDto } from './dto/create-user-response.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({
    description: 'Create a new user (JSON body)',
    type: UserDto,
    required: true,
  })
  @ApiResponse({
status: 201,
    description: 'User created successfully.',
    type: CreateUserResponseDto,  // Return CreateUserResponseDto instead of UserDto
  })
  async create(@Body() userData: Partial<UserDto>): Promise<CreateUserResponseDto> {
    // Await the result of the user creation
    const createdUser = await this.usersService.create(userData as UserDto);  // Await the promise

    // Return the response with both user data and a message
    return {
      user: createdUser,  // The created user
      message: 'User created successfully.',
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'List of users.', type: [UserDto] }) // Use UserDto for Swagger
  async findAll(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }

  @Get(':email')
  @ApiOperation({ summary: 'Find a user by email' })
  @ApiResponse({ status: 200, description: 'User found.', type: UserDto })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async findByEmail(@Param('email') email: string): Promise<UserDto | null> {
    return this.usersService.findByEmail(email);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user by ID' })
  @ApiResponse({ status: 200, description: 'User updated.', type: UserDto })
  async update(@Param('id') id: string, @Body() userData: Partial<UserDto>): Promise<UserDto | null> {
    return this.usersService.update(id, userData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiResponse({
    status: 200,
    description: 'User deleted successfully.',
    // type: DeleteUserResponseDto,  // Use the DeleteUserResponseDto as the response type
  })
  async delete(@Param('id') id: string): Promise<DeleteUserResponseDto> {
    const user = await this.usersService.delete(id);  // Assuming delete returns the deleted user
    if (user) {
      return {
        user,
        message: 'User deleted successfully.',
      };
    }
    return {
      user: null,  // If the user does not exist, return null for user
      message: 'User not found.',
    };
  }
}
