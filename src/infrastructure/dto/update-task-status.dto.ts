import { IsEnum } from "class-validator";
import { TaskStatus } from "../entities/task-status";

export class UpdateTaskStatusDto {
    @IsEnum(TaskStatus)
    status: TaskStatus
}