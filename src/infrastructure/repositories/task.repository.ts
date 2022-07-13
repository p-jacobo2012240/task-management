import { InjectRepository } from "@nestjs/typeorm";
import { Brackets, Repository } from "typeorm";
import { Task } from "../entities/task.entity";
import { TaskRepository } from "../../application/repositories/task-repository";
import { TaskDtoDomain } from "src/domain/task.dto.domain";
import { TaskDtoMapper } from "../mappers/task.dto.mapper";
import { GetTaskFilterDto } from "../dto/get-task-filter.dto";
import { User } from "../entities/user.entity";

export class TaskRepositoryImpl implements TaskRepository  {

    constructor(
        @InjectRepository(Task) private taskRepository: Repository<Task>,
        private taskDtoMapper: TaskDtoMapper
    ) {}
     
    async getAllTaskWithQuery(filterDto: GetTaskFilterDto, user: User): Promise<TaskDtoDomain[]> {
        const { status, search } = filterDto;
        
        const query = this.taskRepository.createQueryBuilder('task')
        query.where({ user })
        
        if (status) {
            query.andWhere('status = :status', { status });
        }

        if (search) {
            query.andWhere(
              new Brackets((qb) => {
                qb.where('title ILIKE :search OR description ILIKE :search', {
                  search: `%${search}%`,
                });
              }),
            );
        }

        const tasks = await query.getMany();
        return tasks;
    }   

    async save(domain: TaskDtoDomain): Promise<TaskDtoDomain> {
        const { title, description, status, user } = domain; 

        const entity = new Task();
        entity.description = description;
        entity.title = title;
        entity.status = status;
        entity.user = user;
        
        await this.taskRepository.save(entity);
        return new Promise((resolve, reject) => resolve(domain));
    }

    findById(param: number): Promise<TaskDtoDomain> {
        return this.taskDtoMapper
            .toDomain(this.taskRepository.findOneBy({ taskId: param})); 
    }

    findAll(params: number): TaskDtoDomain[] {
        // this method are not use because there create custom findAll with filters
        throw new Error("Method not implemented.");
    }

    async delete(param: number): Promise<number> {
        const rowAffected = this.taskRepository.delete({ taskId: param });
        return (await rowAffected).affected
    }
}