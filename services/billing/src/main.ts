import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4002);
  // eslint-disable-next-line no-console
  console.log('Billing service listening on http://localhost:4002');
}

bootstrap();




