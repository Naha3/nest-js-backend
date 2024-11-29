import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],  // The controller is registered here
  providers: [AuthService],      // The service is provided here
})
export class AuthModule {}
