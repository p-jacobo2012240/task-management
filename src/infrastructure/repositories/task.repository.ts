import { InjectRepository } from "@nestjs/typeorm";
import { TaskDomain } from "../../domain/task.domain";
import { Repository } from "typeorm";
import { CreateTaskDto } from "../dto/create-task.dto";
import { Task } from "../entities/task.entity";


export class TaskRepository  {

    constructor(
        @InjectRepository(Task) private taskRepository: Repository<Task>,
    ) {}
    

    public createTask(createTaskDto: CreateTaskDto) : void { // check and change interface to class
        this.taskRepository.save(createTaskDto)
    }
    
}