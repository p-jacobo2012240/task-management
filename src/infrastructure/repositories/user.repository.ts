import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "src/application/repositories/user-repository";
import { UserDtoDomain } from "src/domain/user.dto.domain";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import * as bcrypt from 'bcrypt';


export class UserRepositoryImpl implements UserRepository {
    
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    async save(domain: UserDtoDomain): Promise<UserDtoDomain> {
        const { username, password } = domain;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log('salt', salt);
        console.log('hashedPassword', hashedPassword );

        const entity = new User();
        entity.username = username;
        entity.password = hashedPassword;

        await this.userRepository.save(entity);
        return new Promise((resolve, reject) => resolve(entity));

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