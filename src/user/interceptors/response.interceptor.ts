// import {
//     Injectable,
//     NestInterceptor,
//     ExecutionContext,
//     CallHandler,
//   } from '@nestjs/common';
//   import { Observable } from 'rxjs';
//   import { map } from 'rxjs/operators';
  
//   @Injectable()
//   export class ResponseInterceptor implements NestInterceptor {
//     intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//       return next.handle().pipe(
//         map((data) => {
//           // If the response has createdAt, format it
//           if (data && data.createdAt) {
//             data.createdAt = new Date(data.createdAt).toLocaleString(); // Adjust the format as needed
//           }
//           return data;
//         }),
//       );
//     }
//   }
  