import { TaskDtoDomain } from "src/domain/task.dto.domain";
import { Task } from "../entities/task.entity";

export class TaskDtoMapper {

    async toDomain(entity: Promise<Task> ): Promise<TaskDtoDomain> {
        const { taskId, title, description, status  } = await entity;
        
        return new Promise<TaskDtoDomain>((resolve, reject) => {
            const dto = new TaskDtoDomain();
            dto.id = taskId;
            dto.title = title;
            dto.description = description;
            dto.status = status;
            resolve(dto);
        }); 
    } 

    async toEntity(domain: Promise<TaskDtoDomain>): Promise<Task> {
        const { id, title, description, status } = await domain;
        
        return new Promise<Task>((resolve, reject) =>{
            const entity = new Task();
            entity.taskId = id;
            entity.title = title;
            entity.description = description;
            entity.status = status;
            resolve(entity);
        });
    } 
}