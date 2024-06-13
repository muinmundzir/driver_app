import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from '@app/app.module';
import { swaggerConfig } from '@app/config/swagger.config';
import { ResponseInterceptor } from '@app/interceptors/response.interceptor';
import { HttpExceptionFilter } from '@app/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
