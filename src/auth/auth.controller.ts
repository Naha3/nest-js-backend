import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';  

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiConsumes('multipart/form-data') 
  @ApiBody({  type: LoginDto, description: 'User credentials (email and password)', })
  @ApiResponse({ status: 200, description: 'Login successful', type: LoginResponseDto, })
  @ApiResponse({status: 401, description: 'Invalid credentials',})
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { accessToken } = await this.authService.login(user);

    return {
      accessToken,  message: 'Login successful',
    };
  }
}