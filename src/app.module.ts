import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application/application.module';
import { DomainModule } from './domain/domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure/infrastructure.module';

@Module({
  imports: [ApplicationModule, DomainModule, InfrastructureModule],
})
export class AppModule {}
