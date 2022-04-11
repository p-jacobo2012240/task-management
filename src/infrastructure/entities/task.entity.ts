import { TaskStatus } from "src/domain/task-status.domain";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    taskId: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus
}