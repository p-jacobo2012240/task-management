import { UserDtoDomain } from "src/domain/user.dto.domain";
import { User } from "../entities/user.entity";

export class UserDtoMapper {

    async toDomain(domain: Promise<User>):  Promise<UserDtoDomain> {
        const { username, userId, password } = await domain;
        
        return new Promise<UserDtoDomain>((resolve, reject) => {
            const dto = new User();
            dto.userId = userId;
            dto.username = username;
            dto.password = password;
            resolve(dto);
        });
    }   

}