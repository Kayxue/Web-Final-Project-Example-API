import { Module } from '@nestjs/common';
import { ArrayController } from './array.controller';

@Module({
  controllers: [ArrayController]
})
export class ArrayModule {}
