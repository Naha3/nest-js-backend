import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class DateformateMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const originalSend = res.send;
    res.send = (body: any) => {
      // Check if the body has createdAt and format it
      if (body && body.createdAt) {
        body.createdAt = new Date(body.createdAt).toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
      }
      originalSend.call(res, body); // Proceed to send the response
    };
    next();
  }
}
