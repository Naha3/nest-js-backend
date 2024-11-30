// src/auth/auth.controller.ts

import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { UserDto } from 'src/user/dto/user.dto';
import { LoginResponseDto } from './dto/login-response.dto';  // The DTO for the login response

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: UserDto, description: 'User credentials (email and password)' })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    type: LoginResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials',
  })
  async login(@Body() userDto: UserDto): Promise<LoginResponseDto> {
    const user = await this.authService.validateUser(userDto.email, userDto.password);
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { accessToken } = await this.authService.login(user);

    return {
      accessToken,
      message: 'Login successful',
    };
  }
}
