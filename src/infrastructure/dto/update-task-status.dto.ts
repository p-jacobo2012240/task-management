import { IsEnum } from "class-validator";
import { TaskStatus } from "../../domain/task-status.domain";

export class UpdateTaskStatusDto {
    
    @IsEnum(TaskStatus)
    status: TaskStatus
}