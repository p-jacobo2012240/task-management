import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from 'src/infrastructure/dto/create-task.dto';
import { GetTaskFilterDto } from 'src/infrastructure/dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from 'src/infrastructure/dto/update-task-status.dto';
import { TaskDtoDomain } from '../../../domain/task.dto.domain';
import { TaskService } from 'src/infrastructure/services/task/task.service';

@Controller('tasks')
export class TaskController {

    constructor(
        private taskService: TaskService
    ) {}

    @Get('/:id') 
    getTaskById(@Param('id') id: string ) : Promise<TaskDtoDomain> {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createNewTask(@Body() createTaskDto: CreateTaskDto) : Promise<TaskDtoDomain> {
        return this.taskService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: string ) : void {
        this.taskService.deleteTaskById(id);
    }

    /**@Get()
    getAllTasks(@Query() filterDto: GetTaskFilterDto) : TaskDomain[] {
        if(Object.keys(filterDto).length) {
            // if we have any filters defined, call taskService.getTasksWithFilters
            return this.taskService.getTasksWithFilters(filterDto);
        } else {
            // otherwise, just get all tasks
            return this.taskService.getAllTasks()
        }
    }

    @Get('/:id') 
    getTaskById(@Param('id') id: string ) : TaskDomain {
        return this.taskService.getTaskById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string, 
        @Body() updateTaskStatusDto: UpdateTaskStatusDto
    ): TaskDomain {
        const { status } = updateTaskStatusDto;
        return this.taskService.updateTaskStatus(id, status);
    }
    **/

}
