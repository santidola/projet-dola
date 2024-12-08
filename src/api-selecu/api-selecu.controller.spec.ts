import { Test, TestingModule } from '@nestjs/testing';
import { ApiSelecuController } from './api-selecu.controller';

describe('ApiSelecuController', () => {
  let controller: ApiSelecuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiSelecuController],
    }).compile();

    controller = module.get<ApiSelecuController>(ApiSelecuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
