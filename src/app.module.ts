import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 

@Module({
  imports: [
    ApplicationModule, 
    DomainModule, 
    InfrastructureModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root@2k22',
      database: 'postgres',
      schema: 'task_management',
      autoLoadEntities: true,
      synchronize: true
    })
  ]
})
export class AppModule {}
