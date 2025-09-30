import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
// import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { ExceptionsErrorHandler } from './common/filters/exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 1. Enable Version API
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  //2. ✅ Global Error Handler
  app.useGlobalFilters(new ExceptionsErrorHandler());

  // 3.✅ Global Success Response Wrapper
  app.useGlobalInterceptors(new TransformInterceptor());

  // 4. Swagger API
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
