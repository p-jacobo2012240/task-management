import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
    signin(@Body() authCredentials: AuthCredentials): Promise<{ accessToken: string }> {
        return this.authService.signIn(authCredentials);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req) {
        console.log(req);
    }
}
