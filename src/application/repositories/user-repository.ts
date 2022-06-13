import { UserDtoDomain } from "src/domain/user.dto.domain";
import { User } from "src/infrastructure/entities/user.entity";
import { IBaseRepository } from "./base-repository";

export interface UserRepository extends IBaseRepository<UserDtoDomain, number> {
    
    findByCredentials(username: string, password: string): Promise<User>;
}