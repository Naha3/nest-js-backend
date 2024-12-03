import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { SongsService } from './songs.service';
// import { SongDto } from './dto/song.dto';
import { SongDto } from './dto/songdto';
import { ApiTags, ApiOperation, ApiResponse, ApiConsumes, ApiBody } from '@nestjs/swagger';

@ApiTags('songs')
@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new song' })
  @ApiConsumes('application/x-www-form-urlencoded') // Accepting form data
  @ApiBody({ type: SongDto }) // Define the body type for Swagger UI
  @ApiResponse({
    status: 201,
    description: 'Song successfully created',
  })
  async create(@Body() songDto: SongDto) {
    return this.songsService.create(songDto);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get all songs by a specific user' })
  @ApiResponse({
    status: 200,
    description: 'List of songs by the user',
  })
  async getSongsByUser(@Param('userId') userId: string) {
    return this.songsService.findAllByUser(userId);
  }
}
