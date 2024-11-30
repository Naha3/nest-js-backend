import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ description: 'The name of the user' })
  name: string;

  @ApiProperty({ description: 'The email of the user' })
  email: string;

  @ApiProperty({ description: 'The password of the user' })
  password: string;

  @ApiProperty({ description: 'Is the user active?', default: true })
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

  @ApiProperty({ description: 'The password of the user' })
  password: string;

  @ApiProperty({ description: 'Is the user active?', default: true })
  isActive: boolean;

  @ApiProperty({ description: 'User creation timestamp', example: '2023-11-29T00:00:00.000Z' })
  createdAt: Date;
}

