import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './controllers/task/task.controller';
import { Task } from './entities/task.entity';
import { TaskDtoMapper } from './mappers/task.dto.mapper';
import { TaskRepositoryImpl } from './repositories/task.repository';
import { TaskService } from './services/task/task.service';
import { AuthService } from './services/auth/auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    controllers: [TaskController],
    providers: [
        TaskService,
        AuthService, 
        TaskRepositoryImpl, 
        TaskDtoMapper, AuthService
    ],
    exports: [TaskService]
})
export class InfrastructureModule {}
