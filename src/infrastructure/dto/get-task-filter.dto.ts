import { TaskStatus } from "../entities/task-status";

export class GetTaskFilterDto {
    status?: TaskStatus;
    search?: string;
}