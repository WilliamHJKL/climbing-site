import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { database_config } from '../config/database_config';
import { RoutesModule } from './routes/routes.modules';

@Module({
  imports: [TypeOrmModule.forRoot(database_config),
    RoutesModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
