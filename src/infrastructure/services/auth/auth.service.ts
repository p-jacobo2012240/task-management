import { Injectable, UnauthorizedException } from '@nestjs/common';
import { resolve } from 'path';
import { UserDtoDomain } from 'src/domain/user.dto.domain';
import { AuthCredentials } from 'src/infrastructure/dto/auth-credentials.dto';
import { UserRepositoryImpl } from 'src/infrastructure/repositories/user.repository';
import { IBaseUserService } from '../base/base-user-service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService implements IBaseUserService {
    
    constructor(
        private userRepository: UserRepositoryImpl
    ) {}

    async signIn(authCredentials: AuthCredentials): Promise<UserDtoDomain> {
        const { username, password } = authCredentials;
        const user = await this.userRepository.findByCredentials(username, password);
        
        if( user && (await bcrypt.compare(password, user.password))){
            return user;
        } else {
            throw new UnauthorizedException('Please check your login credentials')
        }
    }

    async signUp(authCredentials: AuthCredentials): Promise<UserDtoDomain> {
        const { username, password } = authCredentials;

        const newUser: UserDtoDomain = {
            username,
            password
        } 
        
        return this.userRepository.save(newUser);
    }

}
