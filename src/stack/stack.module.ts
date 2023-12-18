import { Module } from '@nestjs/common';
import { StackController } from './stack.controller';

@Module({
  controllers: [StackController]
})
export class StackModule {}
