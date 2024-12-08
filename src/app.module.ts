import { Module } from '@nestjs/common';
import {tasksmodule} from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';
import { ApiSelecuModule } from './api-selecu/api-selecu.module';

@Module({
  imports: [tasksmodule, ProjectsModule, UsersModule, AuthModule, ApiSelecuModule],
  controllers: [HelloController],
})
export class AppModule {}
