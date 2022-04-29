import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "../entities/task.entity";
import { TaskRepository } from "../../application/repositories/task-repository";
import { TaskDtoDomain } from "src/domain/task.dto.domain";
import { TaskDtoMapper } from "../mappers/tast.dto.mapper";

export class TaskRepositoryImpl implements TaskRepository  {

    constructor(
        @InjectRepository(Task) private taskRepository: Repository<Task>,
        private taskDtoMapper: TaskDtoMapper
    ) {}
    
    async save(domain: TaskDtoDomain): Promise<TaskDtoDomain> {
        const { title, description, status } = domain; 

        const entity = new Task();
        entity.description = description;
        entity.title = title;
        entity.status = status;  
        
        await this.taskRepository.save(entity);
        return new Promise((resolve, reject) => resolve(domain));
    }

    findById(param: number): Promise<TaskDtoDomain> {
        return this.taskDtoMapper
            .toDomain(this.taskRepository.findOneBy({ taskId: param})); 
    }

    findAll(params: number): TaskDtoDomain[] {
        throw new Error("Method not implemented.");
    }

    delete(param: number): void {
        this.taskRepository.delete(param)
    }
}