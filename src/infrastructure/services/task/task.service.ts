import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from 'src/infrastructure/dto/create-task.dto';
import { GetTaskFilterDto } from 'src/infrastructure/dto/get-task-filter.dto';
import { User } from 'src/infrastructure/entities/user.entity';
import { TaskRepositoryImpl } from 'src/infrastructure/repositories/task.repository';
import { TaskStatus } from '../../../domain/task-status.domain';
import { TaskDtoDomain } from '../../../domain/task.dto.domain';
import { IBaseTaskSerice } from '../base/base-task-service';

@Injectable()
export class TaskService implements IBaseTaskSerice  {
    
    constructor(
        private taskRepository: TaskRepositoryImpl 
    ) {}
    
    async getAllTasks(filterDto: GetTaskFilterDto): Promise<TaskDtoDomain[]> {
       return await this.taskRepository.getAllTaskWithQuery(filterDto);
    }

    async getTaskById(id: string): Promise<TaskDtoDomain> {
        const task = await this.taskRepository.findById(Number(id))
        
        if(!task) {
            throw new NotFoundException(`task with id = ${id} not found`)
        }
        
        return task;
    }

    createTask(createTaskDto: CreateTaskDto, user: User ) : Promise<TaskDtoDomain> {
        const { title, description } = createTaskDto;

        const newTask: TaskDtoDomain = {
            title: title,
            description: description,
            status: TaskStatus.OPEN,
            user: user
        }
        
        return this.taskRepository.save(newTask); 
    }

    async deleteTaskById(taskId: string) : Promise<void> {
        const affected = await this.taskRepository.delete(Number(taskId));

        if(affected === 0) {
            throw new NotFoundException(`task with id = ${taskId} not found`)
        }
    }

    async updateTaskStatus(id: string, status: TaskStatus) : Promise<TaskDtoDomain> {
        const task = await this.getTaskById(id);
        
        task.status = status
        await this.taskRepository.save(task); 
        return task
    }
}
