import { UserDtoDomain } from 'src/domain/user.dto.domain';
import { AuthCredentials } from '../../dto/auth-credentials.dto';

export interface IBaseUserService {

    signUp(AuthCredentials: AuthCredentials): Promise<UserDtoDomain>;

    signIn(AuthCredentials: AuthCredentials): Promise<UserDtoDomain>;
}