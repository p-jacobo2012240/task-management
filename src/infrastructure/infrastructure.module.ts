import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './controllers/task/task.controller';
import { Task } from './entities/task.entity';
import { TaskDtoMapper } from './mappers/tast.dto.mapper';
import { TaskRepositoryImpl } from './repositories/task.repository';
import { TaskService } from './services/task/task.service';

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    controllers: [TaskController],
    providers: [
        TaskService, 
        TaskRepositoryImpl, 
        TaskDtoMapper
    ],
    exports: [TaskService]
})
export class InfrastructureModule {}
