import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.modle';
// import { AuthModule } from './auth/auth.module'; // Correct import


@Module({
  imports: [AuthModule, UserModule], // Import AuthModule and UserModule here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
