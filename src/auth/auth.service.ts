// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/users.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // Validate user by email and password
  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;  // Return user if password matches
    }
    return null;  // Return null if credentials are invalid
  }

  // Generate JWT Token for the user
  async login(user: any) {
    const payload = { email: user.email, sub: user._id };  // Payload for the JWT
    const accessToken = this.jwtService.sign(payload);  // Sign the JWT

    return { accessToken };
  }
}
