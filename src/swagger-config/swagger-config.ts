import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  setup(app: NestExpressApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Nestjs Boilerplate API Modular example')
      .setDescription('The Nestjs Boilerplate API Modular description')
      .setVersion('0.0.1')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }
}
