import { ApiProperty } from '@nestjs/swagger';

export class SongDto {
  @ApiProperty({
    description: 'Title of the song',
    example: 'Shape of You',
  })
  title: string;

  @ApiProperty({
    description: 'Artist of the song',
    example: 'Ed Sheeran',
  })
  artist: string;

  @ApiProperty({
    description: 'User ID of the song owner',
    example: '60d5f3e7f1a2c4d8d8d1e1a8',
  })
  userId: string; // Reference to the user ID
}
