import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTaskDto } from "../dto/create-task.dto";
import { Task } from "../entities/task.entity";
import { TaskRepository } from "src/application/repositories/Itask-repository";
import { TaskDtoDomain } from "src/domain/task.dto.domain";

export class TaskRepositoryImpl implements TaskRepository  {

    constructor(
        @InjectRepository(Task) private taskRepository: Repository<Task>,
    ) {}

    save: (entity: TaskDtoDomain) => TaskDtoDomain;
    findById: (param: number) => number;
    findAll: (params: number) => TaskDtoDomain[];
    delete: (param: number) => void;
}