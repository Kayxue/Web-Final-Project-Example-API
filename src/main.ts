import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { injectSpeedInsights } from "@vercel/speed-insights"

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  injectSpeedInsights({})
  await app.listen(3000);
}
bootstrap();
