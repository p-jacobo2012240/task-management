import { Module } from '@nestjs/common';
import { TaskController } from '../controllers/task/task.controller';
import { TaskService } from '../services/task/task.service';

@Module({
    controllers: [TaskController],
    providers: [TaskService],
    exports: [TaskService]
})
export class InfrastructureModule {}
