import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from 'src/infrastructure/dto/create-task.dto';
import { GetTaskFilterDto } from 'src/infrastructure/dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from 'src/infrastructure/dto/update-task-status.dto';
import { Task } from 'src/domain/task.domain';
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
    deleteTaskById(@Param('id') id: string ) : void {
        return this.taskService.deleteTaskById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string, 
        @Body() updateTaskStatusDto: UpdateTaskStatusDto
    ): Task {
        const { status } = updateTaskStatusDto;
        return this.taskService.updateTaskStatus(id, status);
    }


}
