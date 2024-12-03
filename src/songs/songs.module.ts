import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SongSchema } from './song.schema';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Song', schema: SongSchema }]), // Register the Song model here
  ],
  providers: [SongsService],
  controllers: [SongsController],
})
export class SongsModule {}
