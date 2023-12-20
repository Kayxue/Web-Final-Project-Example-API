import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StackModule } from './stack/stack.module';
import { ArrayModule } from './array/array.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [StackModule, ArrayModule, QueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
