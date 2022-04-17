import { TaskDtoDomain } from "src/domain/task.dto.domain";

export interface IBaseTaskSerice {

    getTaskById(id: string): Promise<TaskDtoDomain>;
}