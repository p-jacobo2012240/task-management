import { Body, Controller, Post } from '@nestjs/common';
import { UserDtoDomain } from 'src/domain/user.dto.domain';
import { AuthCredentials } from 'src/infrastructure/dto/auth-credentials.dto';
import { AuthService } from 'src/infrastructure/services/auth/auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {} 

    @Post('/signup')
    signup(@Body() authCredentials: AuthCredentials): Promise<UserDtoDomain> {
        return this.authService.signUp(authCredentials);
    }

    @Post('/signin')
    signin(@Body() authCredentials: AuthCredentials): Promise<UserDtoDomain> {
        return this.authService.signIn(authCredentials);
    }
}
