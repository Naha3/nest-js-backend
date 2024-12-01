import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './user.dto';

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

export class DeleteUserResponseDto {
  @ApiProperty({
    description: 'The user data that was deleted.',
    type: UserDto,
    required: false,
  })
  user?: UserDto;

  @ApiProperty({
    description: 'A message indicating the result of the operation.',
    example: 'User deleted successfully.',
  })
  message: string;
}
