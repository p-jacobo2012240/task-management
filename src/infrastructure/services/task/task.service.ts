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
}
