import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './controllers/task/task.controller';
import { Task } from './entities/task.entity';
import { TaskDtoMapper } from './mappers/task.dto.mapper';
import { TaskRepositoryImpl } from './repositories/task.repository';
import { TaskService } from './services/task/task.service';
import { AuthService } from './services/auth/auth.service';
import { User } from './entities/user.entity';
import { AuthController } from './controllers/auth/auth.controller';
import { UserRepositoryImpl } from './repositories/user.repository';
import { UserDtoMapper } from './mappers/user.dto.mapper';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt'}),
        JwtModule.register({
            secret: 'hckSecret',
            signOptions: {
                expiresIn: 3600
            }
        }),
        TypeOrmModule.forFeature([Task, User]),
    ],
    controllers: [TaskController, AuthController],
    providers: [
        TaskService,
        AuthService, 
        TaskRepositoryImpl, 
        TaskDtoMapper, 
        UserDtoMapper,
        AuthService,
        UserRepositoryImpl
    ],
    exports: [
        TaskService, 
        AuthService
    ]
})
export class InfrastructureModule {}
