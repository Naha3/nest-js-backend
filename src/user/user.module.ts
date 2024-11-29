// src/users/user.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UserModel, UsersService],
  controllers: [UserController],  // Register the controller here
  exports: [UserModel, UsersService], // Export services for other modules if needed
})
export class UserModule {}
