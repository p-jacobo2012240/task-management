import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from '../domain/jwt-payload.domain';
import { User } from 'src/infrastructure/entities/user.entity';
import { UserRepositoryImpl } from "./repositories/user.repository";
import { use } from "passport";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        private userRepository: UserRepositoryImpl,
    ) {
        super({
            secretOrKey: 'hckSecret',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }

    async validate(payload: JwtPayload) {
        const { username } = payload;
        const user: User = await this.userRepository.findByCredentials(username, "");
        
        if(!user) {
            throw new UnauthorizedException();
        }

        return user;
    }

}