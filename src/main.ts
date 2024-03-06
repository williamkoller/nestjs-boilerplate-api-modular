import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerConfig } from './swagger-config/swagger-config';
import helmet from 'helmet';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.use(helmet());

  new SwaggerConfig().setup(app);

  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('PORT');
  await app.listen(port, () =>
    logger.log(`Server running at http://localhost:${port}/swagger`),
  );
}
bootstrap();
