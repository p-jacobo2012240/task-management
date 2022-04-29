import { TaskStatus } from "src/domain/task-status.domain";
import { TaskDtoDomain } from "src/domain/task.dto.domain";
import { CreateTaskDto } from "src/infrastructure/dto/create-task.dto";
import { GetTaskFilterDto } from "src/infrastructure/dto/get-task-filter.dto";

export interface IBaseTaskSerice {

    getTaskById(id: string): Promise<TaskDtoDomain>;

    getAllTasks(filterDto: GetTaskFilterDto): Promise<TaskDtoDomain[]>

    createTask(createTaskDto: CreateTaskDto) : Promise<TaskDtoDomain>;

    deleteTaskById(taskId: string) : Promise<void>;

    updateTaskStatus(id: string, status: TaskStatus) : Promise<TaskDtoDomain> 
}