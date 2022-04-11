import { TaskStatus } from "./task-status.domain";

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}