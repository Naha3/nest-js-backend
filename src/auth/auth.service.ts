import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin(): string {
    // Return a simple message
    return 'This is the sign-in endpoint';
  }

  signup(): string {
    // Return a simple message
    return 'This is the sign-up endpoint';
  }
}
