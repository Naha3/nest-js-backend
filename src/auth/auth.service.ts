// src/auth/auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/user/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'; 
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Validate user credentials
  async validateUser(email: string, password: string): Promise<UserDto | null> {
    const user = await this.usersService.findByEmail(email);

    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  // Login method to return a JWT token
  async login(user: UserDto): Promise<{ accessToken: string }> {
    const payload = { email: user.email, sub: user.email };  // Use email or user ID as the subject
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
