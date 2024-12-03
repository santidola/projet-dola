import { Module } from '@nestjs/common';
import {tasksmodule} from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [tasksmodule, ProjectsModule, UsersModule, AuthModule],
  controllers: [HelloController],
})
export class AppModule {}
