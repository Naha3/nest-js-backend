import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://naha1691anlm:naha119131@cluster0.v0zmo.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
