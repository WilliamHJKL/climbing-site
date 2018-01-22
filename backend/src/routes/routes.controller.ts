import { Controller, Get } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { Route } from './route.entity';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  findAll(): Promise<Route[]> {
    return this.routesService.findAll();
  }
}