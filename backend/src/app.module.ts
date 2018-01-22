import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { database_config } from '../config/database_config';
import { RoutesModule } from './routes/routes.modules';
import { CorsMiddleware } from './cors.middleware';

@Module({
  imports: [TypeOrmModule.forRoot(database_config),
    RoutesModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
      consumer.apply(CorsMiddleware).forRoutes({path: '*', method: RequestMethod.ALL});
  }
}
