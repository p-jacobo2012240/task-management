import { IsEnum, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../../domain/task-status.domain";

export class GetTaskFilterDto {
    
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;
    
    @IsOptional()
    @IsString()
    search?: string;
}