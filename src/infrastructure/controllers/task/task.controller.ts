import { Controller, Get } from '@nestjs/common';
import { TaskService } from 'src/infrastructure/services/task/task.service';

@Controller('task')
export class TaskController {

    constructor(
        private taskService: TaskService
    ) {}

    @Get()
    getAllTasks() {
        this.taskService.getAllTasks()
    }

}
