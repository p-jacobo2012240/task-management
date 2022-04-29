import { TaskDtoDomain } from "src/domain/task.dto.domain";
import { GetTaskFilterDto } from "src/infrastructure/dto/get-task-filter.dto";
import { IBaseRepository } from "./base-repository";

export interface TaskRepository extends IBaseRepository<TaskDtoDomain, number> {

    getAllTaskWithQuery(filterDto: GetTaskFilterDto): Promise<TaskDtoDomain[]>;
}