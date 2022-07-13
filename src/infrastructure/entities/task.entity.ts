import { Exclude } from "class-transformer";
import { TaskStatus } from "src/domain/task-status.domain";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    taskId: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus

    @ManyToOne((_type) => User, (user) => user.tasks, { eager: false })
    @Exclude({ toPlainOnly: true })
    user: User;
}