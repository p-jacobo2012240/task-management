import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './controllers/task/task.controller';
import { Task } from './entities/task.entity';
import { TaskService } from './services/task/task.service';

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    controllers: [TaskController],
    providers: [TaskService],
    exports: [TaskService]
})
export class InfrastructureModule {}
