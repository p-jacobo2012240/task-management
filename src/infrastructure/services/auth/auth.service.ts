import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { UserDtoDomain } from 'src/domain/user.dto.domain';
import { AuthCredentials } from 'src/infrastructure/dto/auth-credentials.dto';
import { UserRepositoryImpl } from 'src/infrastructure/repositories/user.repository';
import { IBaseUserService } from '../base/base-user-service';

@Injectable()
export class AuthService implements IBaseUserService {
    
    constructor(
        private userRepository: UserRepositoryImpl
    ) {}

    async signUp(authCredentials: AuthCredentials): Promise<UserDtoDomain> {
        const { username, password } = authCredentials;

        const newUser: UserDtoDomain = {
            username,
            password
        } 
        
        return this.userRepository.save(newUser);
    }
}
