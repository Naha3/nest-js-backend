import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://naha1691anlm:naha119131@cluster0.v0zmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
    AuthModule,
    UserModule,
    SongsModule,
  ],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}