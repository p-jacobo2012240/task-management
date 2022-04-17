import { TaskStatus } from "./task-status.domain";

export class TaskDtoDomain {
    
    id?: number;

    title: string;

    description: string;

    status: TaskStatus;
}