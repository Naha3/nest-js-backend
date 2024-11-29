// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.moule';

@Module({
  imports: [AuthModule, UserModule], // Import AuthModule and UserModule here
  controllers: [AppController], // AppController can remain as it is
  providers: [AppService],
})
export class AppModule {}
