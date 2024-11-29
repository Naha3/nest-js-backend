// src/user/dto/create-user-response.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './user.dto';  // Import the UserDto

// Create user response DTO
export class CreateUserResponseDto {
  @ApiProperty({
    description: 'The user data created.',
    type: UserDto,
  })
  user: UserDto;

  @ApiProperty({
    description: 'A message indicating the result of the operation.',
    example: 'User created successfully.',
  })
  message: string;
}

// Delete user response DTO
export class DeleteUserResponseDto {
  @ApiProperty({
    description: 'The user data that was deleted.',
    type: UserDto,
    required: false, // This may be null if the user does not exist
  })
  user?: UserDto;

  @ApiProperty({
    description: 'A message indicating the result of the operation.',
    example: 'User deleted successfully.',
  })
  message: string;
}
