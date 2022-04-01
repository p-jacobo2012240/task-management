import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from 'src/infrastructure/dto/create-task.dto';
import { GetTaskFilterDto } from 'src/infrastructure/dto/get-task-filter.dto';
import { TaskStatus } from 'src/infrastructure/entities/task-status';
import { Task } from 'src/infrastructure/entities/task.entity';
import { TaskService } from 'src/infrastructure/services/task/task.service';

@Controller('tasks')
export class TaskController {

    constructor(
        private taskService: TaskService
    ) {}

    @Get()
    getAllTasks(@Query() filterDto: GetTaskFilterDto) : Task[] {
        if(Object.keys(filterDto).length) {
            // if we have any filters defined, call taskService.getTasksWithFilters
            return this.taskService.getTasksWithFilters(filterDto);
        } else {
            // otherwise, just get all tasks
            return this.taskService.getAllTasks()
        }
    }

    @Post()
    createNewTask(@Body() createTaskDto: CreateTaskDto) : Task {
        return this.taskService.createTask(createTaskDto);
    }

    @Get('/:id') 
    getTaskById(@Param('id') id: string ) : Task {
        return this.taskService.getTaskById(id);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: string ) : string {
        return this.taskService.deleteTaskById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string, 
        @Body('status') status: TaskStatus
    ): Task {
        return this.taskService.updateTaskStatus(id, status);
    }


}
