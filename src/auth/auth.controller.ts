// auth.controller.ts
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin() {
    return this.authService.signin(); // Call signin method from AuthService
  }

  @Post('signup')
  signup() {
    return this.authService.signup(); // Call signup method from AuthService
  }
}
