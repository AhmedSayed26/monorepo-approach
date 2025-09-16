import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4003);
  // eslint-disable-next-line no-console
  console.log('Notifications service listening on http://localhost:4003');
}

bootstrap();




