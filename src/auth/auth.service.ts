import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return 'Sign-in logic here';
  }

  signup() {
    return 'Sign-up logic here';
  }
}
