import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { TransformInterceptor } from './interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });
  // app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(8000);
}
bootstrap();
