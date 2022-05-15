import { UserRepository } from "src/application/repositories/user-repository";
import { UserDtoDomain } from "src/domain/user.dto.domain";

export class UserRepositoryImpl implements UserRepository {
    
    save(domain: UserDtoDomain): Promise<UserDtoDomain> {
        throw new Error("Method not implemented.");
    }
    findById(param: number): Promise<UserDtoDomain> {
        throw new Error("Method not implemented.");
    }
    findAll(params: number): UserDtoDomain[] {
        throw new Error("Method not implemented.");
    }
    delete(param: number): Promise<number> {
        throw new Error("Method not implemented.");
    }
}