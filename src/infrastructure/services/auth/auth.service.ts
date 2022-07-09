import { Injectable, UnauthorizedException } from '@nestjs/common';
import { resolve } from 'path';
import { UserDtoDomain } from 'src/domain/user.dto.domain';
import { AuthCredentials } from 'src/infrastructure/dto/auth-credentials.dto';
import { UserRepositoryImpl } from 'src/infrastructure/repositories/user.repository';
import { IBaseUserService } from '../base/base-user-service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/infrastructure/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/domain/jwt-payload.domain';

@Injectable()
export class AuthService implements IBaseUserService {
    
    constructor(
        private userRepository: UserRepositoryImpl,
        private jwtService: JwtService
    ) {}

    async signIn(authCredentials: AuthCredentials): Promise<{ accessToken: string }> {
        const { username, password } = authCredentials;
        const user: User = await this.userRepository.findByCredentials(username, password);
        
        if( user && (await bcrypt.compare(password, user.password))) {
            const payload: JwtPayload = { username: user.username }
            const accessToken: string = await this.jwtService.sign(payload);
            return { accessToken };
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
