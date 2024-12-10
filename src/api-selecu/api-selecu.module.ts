import { Module } from '@nestjs/common';
import { ApiSelecuService } from './api-selecu.service';
import { ApiSelecuController } from './api-selecu.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  providers: [ApiSelecuService, AuthService],
  controllers: [ApiSelecuController]
})
export class ApiSelecuModule {}
