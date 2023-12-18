import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StackModule } from './stack/stack.module';

@Module({
  imports: [StackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
