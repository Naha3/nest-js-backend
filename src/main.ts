import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { DateformateMiddleware } from './user/dateformate/dateformate.middleware'; // Import middleware
import { ValidationPipe } from '@nestjs/common';
import { DateformateMiddleware } from './user/dateformate/dateformate.middleware';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Apply the DateformateMiddleware globally
  // app.use(DateformateMiddleware);
  
  // app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The API description')
    .setVersion('1.0') 
    .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
