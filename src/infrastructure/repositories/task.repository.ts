import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "../entities/task.entity";
import { TaskRepository } from "src/application/repositories/Itask-repository";
import { TaskDtoDomain } from "src/domain/task.dto.domain";

export class TaskRepositoryImpl implements TaskRepository  {

    constructor(
        @InjectRepository(Task) private taskRepository: Repository<Task>,
    ) {}
    
    save(entity: TaskDtoDomain): TaskDtoDomain {
        throw new Error("Method not implemented.");
    }

    findById(param: number): TaskDtoDomain {
        throw new Error("Method not implemented.");
    }

    findAll(params: number): TaskDtoDomain[] {
        throw new Error("Method not implemented.");
    }

    delete(param: number): void {
        throw new Error("Method not implemented.");
    }
}