import { TaskDtoDomain } from "src/domain/task.dto.domain";
import { IBaseRepository } from "./base-repository";

export interface TaskRepository extends IBaseRepository<TaskDtoDomain, number> {

}