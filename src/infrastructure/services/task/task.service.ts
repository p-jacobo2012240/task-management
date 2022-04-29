import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from 'src/infrastructure/dto/create-task.dto';
import { GetTaskFilterDto } from 'src/infrastructure/dto/get-task-filter.dto';
import { TaskRepositoryImpl } from 'src/infrastructure/repositories/task.repository';
import { TaskStatus } from '../../../domain/task-status.domain';
import { TaskDtoDomain } from '../../../domain/task.dto.domain';
import { IBaseTaskSerice } from '../base/base-task-service';

@Injectable()
export class TaskService implements IBaseTaskSerice  {
    
    constructor(
        private taskRepository: TaskRepositoryImpl 
    ) {}

    async getTaskById(id: string): Promise<TaskDtoDomain> {
        const task = await this.taskRepository.findById(Number(id))
        
        if(!task) {
            throw new NotFoundException(`task with id = ${id} not found`)
        }
        
        return task;
    }

    createTask(createTaskDto: CreateTaskDto) : Promise<TaskDtoDomain> {
        const { title, description } = createTaskDto;

        const newTask: TaskDtoDomain = {
            title: title,
            description: description,
            status: TaskStatus.OPEN
        }
        return this.taskRepository.save(newTask); 
    }

    deleteTaskById(taskId: string) : void {
        this.taskRepository.delete(Number(taskId));
    }

    /** 
    private taskList: TaskDomain[] = [];

    getAllTasks(): TaskDomain[] {
        return this.taskList;
    }

    getTasksWithFilters(filters: GetTaskFilterDto) : TaskDomain[] {
        const { status, search  } = filters;
        let tasks = this.getAllTasks()

        if(status) {
            tasks = this.taskList.filter(tsk => tsk.status === status)
        }

        if(search) {
            tasks = tasks.filter((tsk) => {
                if(tsk.title.includes(search) || tsk.description.includes(search)) {
                    return true
                }
                return false;
            });
        }
        return tasks;
    }

   
    
    getTaskById(taskId: string) : TaskDomain {
        const task = this.taskList.find((tsk) => tsk.id == taskId );
        
        if(!task) {
            throw new NotFoundException(`task with id = ${taskId} not found`)
        }
        
        return task;
    }


    updateTaskStatus(id: string, status: TaskStatus) : TaskDomain {
        const task = this.getTaskById(id);
        task.status = status
        return task
    }
    **/
}
