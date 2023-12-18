import { Test, TestingModule } from '@nestjs/testing';
import { ArrayController } from './array.controller';

describe('ArrayController', () => {
  let controller: ArrayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArrayController],
    }).compile();

    controller = module.get<ArrayController>(ArrayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
