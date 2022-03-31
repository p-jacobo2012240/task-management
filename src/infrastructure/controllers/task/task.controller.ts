import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from 'src/infrastructure/dto/create-task.dto';
import { Task } from 'src/infrastructure/entities/task.entity';
import { TaskService } from 'src/infrastructure/services/task/task.service';

@Controller('tasks')
export class TaskController {

    constructor(
        private taskService: TaskService
    ) {}

    @Get()
    getAllTasks() : Task[] {
        return this.taskService.getAllTasks()
    }

    @Post()
    createNewTask(@Body() createTaskDto: CreateTaskDto) : Task {
        return this.taskService.createTask(createTaskDto);
    }

}
