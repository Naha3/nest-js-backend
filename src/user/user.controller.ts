import { Controller, Post, Get, Param, Body, Put, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { UserDto, UserDto1 } from './dto/user.dto';
import { CreateUserResponseDto, DeleteUserResponseDto } from './dto/create-user-response.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { LoginDto } from '../auth/dto/login.dto';

@ApiTags('users')
@Controller('users')

export class UserController {
  constructor(private readonly usersService: UsersService,
  ) { }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ description: 'Create a new user (Form Data)', type: UserDto1, required: true })
  @ApiResponse({ status: 201, description: 'User created successfully.', type: CreateUserResponseDto })
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() userData: UserDto1, @UploadedFile() file: Express.Multer.File): Promise<CreateUserResponseDto> {
    console.log(file);  
    const createdUser = await this.usersService.create(userData);
    return {
      user: createdUser, 
      message: 'User created successfully.',
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'List of users.', type: [UserDto] })
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
    type: DeleteUserResponseDto,
  })
  async delete(@Param('id') id: string): Promise<DeleteUserResponseDto> {
    const user = await this.usersService.delete(id);
    if (!user) {
      return { message: 'User not found or already deleted.' };
    }
    return {
      user,
      message: 'User deleted successfully.',
    };
  }
}
