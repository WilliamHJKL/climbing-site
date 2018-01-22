import { Controller, Get, Param, Post, Delete, Body } from "@nestjs/common";
import { RoutesService } from "./routes.service";
import { Route } from "./route.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Controller("routes")
export class RoutesController {
  constructor(
    @InjectRepository(Route)
    private readonly routesRepository: Repository<Route>
  ) {}

  @Get()
  async findAll(): Promise<Route[]> {
    console.log('findAll');
    return this.routesRepository.find();
  }

  @Get(":id")
  async findById(@Param() params) {
    console.log('get');
    console.log(params.id);
    return this.routesRepository.findOneById(params.id);
  }

  // create
  @Post()
  async create(@Body() route: Route) {
    console.log('Post');
    console.log(route);
    return this.routesRepository.save(route);
  }

  @Delete(":id")
  async delete(@Param() params) {
    console.log('Delete');
    console.log(params.id);
    return this.routesRepository.deleteById(params.id);
  }
}
