import { TaskStatus } from "./task-status.domain";

export interface TaskDomain {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}