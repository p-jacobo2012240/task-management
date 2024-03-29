import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { CreateTaskDto } from 'src/infrastructure/dto/create-task.dto';
import { GetTaskFilterDto } from 'src/infrastructure/dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from 'src/infrastructure/dto/update-task-status.dto';
import { TaskDtoDomain } from '../../../domain/task.dto.domain';
import { TaskService } from 'src/infrastructure/services/task/task.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/infrastructure/get-user.decorator';
import { User } from 'src/infrastructure/entities/user.entity';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TaskController {

    constructor(
        private taskService: TaskService
    ) {}

    @Get() 
    getAllTasks(
        @Query() filterDto: GetTaskFilterDto,
        @GetUser() user: User
    ):  Promise<TaskDtoDomain[]> {
        return this.taskService.getAllTasks(filterDto,  user);
    }

    @Get('/:id') 
    getTaskById(@Param('id') id: string ): Promise<TaskDtoDomain> {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createNewTask(
        @Body() createTaskDto: CreateTaskDto,
        @GetUser() user: User
    ): Promise<TaskDtoDomain> {
        return this.taskService.createTask(createTaskDto, user);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: string ): Promise<void> {
        return this.taskService.deleteTaskById(id);
    }


    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id: string, @Body() updateTaskStatusDto: UpdateTaskStatusDto): Promise<TaskDtoDomain> {
        const { status } = updateTaskStatusDto;
        return this.taskService.updateTaskStatus(id, status);
    }
}
