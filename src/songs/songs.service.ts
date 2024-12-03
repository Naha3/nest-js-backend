import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Song } from './schemas/song.schema';
import { Song } from './song.schema';

@Injectable()
export class SongsService {
  constructor(@InjectModel('Song') private readonly songModel: Model<Song>) {}

  // Define your methods here (e.g., create, find songs)
  async create(createSongDto: any) {
    const createdSong = new this.songModel(createSongDto);
    return createdSong.save();
  }

  async findAllByUser(userId: string) {
    return this.songModel.find({ userId }).exec();
  }
}
