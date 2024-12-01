// src/user/dto/user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsBoolean } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: 'The name of the user' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'The email of the user' })
  @IsEmail()
  email: string;

  // The password is required for creating a user, not for returning the user
  @ApiProperty({ description: 'The password of the user', required: false })
  @IsString()
  password?: string;  // Optional when returning the user

  @ApiProperty({ description: 'Is the user active?', default: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'User creation timestamp', example: '2023-11-29T00:00:00.000Z' })
  createdAt: Date;
}

export class UserDto1 {
  @ApiProperty({ description: 'The name of the user' })
  name: string;

  @ApiProperty({ description: 'The email of the user' })
  email: string;

  @ApiProperty({ description: 'The Id of the user' })
  id: string;

  // Include password when creating a user
  @ApiProperty({ description: 'The password of the user' })
  password: string;

  @ApiProperty({ description: 'Is the user active?', default: true })
  isActive: boolean;

  @ApiProperty({ description: 'User creation timestamp', example: '2023-11-29T00:00:00.000Z' })
  createdAt: Date;
}
