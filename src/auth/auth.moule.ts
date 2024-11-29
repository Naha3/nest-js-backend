// auth.module.ts
import { Module } from '@nestjs/common';
// import { AuthController } from './auth.controller';
// 
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController], // Ensure AuthController is listed here
  providers: [AuthService],      // AuthService should be listed in providers
})
export class AuthModule {}
