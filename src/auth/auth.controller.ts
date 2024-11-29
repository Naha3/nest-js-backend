import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Use GET for signin, passing credentials as query params (e.g. /signin?username=user&password=pass)
  @Get('signin')
  signin(@Query('username') username: string, @Query('password') password: string) {
    return this.authService.signin(); // Simple message
  }

  // Use GET for signup, passing user data as query params (e.g. /signup?username=user&password=pass)
  @Get('signup')
  signup(@Query('username') username: string, @Query('password') password: string) {
    return this.authService.signup(); // Simple message
  }
}
