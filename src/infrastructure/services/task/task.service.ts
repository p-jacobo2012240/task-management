import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from 'src/infrastructure/dto/create-task.dto';
import { GetTaskFilterDto } from 'src/infrastructure/dto/get-task-filter.dto';
import { TaskStatus } from '../../../domain/task-status.domain';
import { TaskDomain } from 'src/domain/task.domain';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
    
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

    createTask(createTaskDto: CreateTaskDto) : TaskDomain {
        const { title, description } = createTaskDto;

        const newTask: TaskDomain = {
            id: uuid(),
            title: title,
            description: description,
            status: TaskStatus.OPEN
        }
        this.taskList.push(newTask);
        return newTask;
    }
    
    getTaskById(taskId: string) : TaskDomain {
        const task = this.taskList.find((tsk) => tsk.id == taskId );
        
        if(!task) {
            throw new NotFoundException(`task with id = ${taskId} not found`)
        }
        
        return task;
    }

    deleteTaskById(taskId: string) : void {
        const task = this.getTaskById(taskId);
        this.taskList = this.taskList.filter(tsk => task.id != taskId);
    }

    updateTaskStatus(id: string, status: TaskStatus) : TaskDomain {
        const task = this.getTaskById(id);
        task.status = status
        return task
    }
    
}
