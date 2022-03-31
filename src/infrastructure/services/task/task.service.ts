import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/infrastructure/dto/create-task.dto';
import { TaskStatus } from 'src/infrastructure/entities/task-status';
import { Task } from 'src/infrastructure/entities/task.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
    
    private taskList: Task[] = [];

    getAllTasks(): Task[] {
        return this.taskList;
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
    
}
