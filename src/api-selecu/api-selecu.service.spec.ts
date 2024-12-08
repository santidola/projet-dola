import { Test, TestingModule } from '@nestjs/testing';
import { ApiSelecuService } from './api-selecu.service';

describe('ApiSelecuService', () => {
  let service: ApiSelecuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiSelecuService],
    }).compile();

    service = module.get<ApiSelecuService>(ApiSelecuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
