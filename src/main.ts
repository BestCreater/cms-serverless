import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Response } from './common/InterceptorsResponse'
import { HttpExceptionFilter } from './common/exceptionFilter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new Response())
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(3000);
}
bootstrap();
