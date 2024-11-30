import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { UserSchema } from './user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    providers: [UserModel, UsersService, JwtService],
    controllers: [UserController],  
    exports: [UserModel, UsersService], 
  })
export class UserModule {}
