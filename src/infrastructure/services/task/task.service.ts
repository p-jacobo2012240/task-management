import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/infrastructure/dto/create-task.dto';
import { GetTaskFilterDto } from 'src/infrastructure/dto/get-task-filter.dto';
import { TaskStatus } from 'src/infrastructure/entities/task-status';
import { Task } from 'src/infrastructure/entities/task.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
    
    private taskList: Task[] = [];

    getAllTasks(): Task[] {
        return this.taskList;
    }

    getTasksWithFilters(filters: GetTaskFilterDto) : Task[] {
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

    createTask(createTaskDto: CreateTaskDto) : Task {
        const { title, description } = createTaskDto;

        const newTask: Task = {
            id: uuid(),
            title: title,
            description: description,
            status: TaskStatus.OPEN
        }
        this.taskList.push(newTask);
        return newTask;
    }
    
    getTaskById(taskId: string) : Task {
        return this.taskList.find((tsk) => tsk.id == taskId );
    }

    deleteTaskById(taskId: string) : string {
        if(!taskId) {
            return `cannot be null`;
        }

        const task = this.taskList.find(tsk => tsk.id == taskId);
        if(task) {
            this.taskList = this.taskList.filter(tsk => tsk.id != taskId);
            return 'task deleted!';
        } else {
            return `task with Id: ${taskId} not exist!`;
        }
    }

    updateTaskStatus(id: string, status: TaskStatus) : Task {
        const task = this.getTaskById(id);
        task.status = status
        return task
    }
    
}
