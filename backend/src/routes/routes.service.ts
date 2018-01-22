import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Route } from "./route.entity";

@Component()
export class RoutesService {
  constructor(
    @InjectRepository(Route)
    private readonly routesRepository: Repository<Route>) {}

  async findAll(): Promise<Route[]> {
    return await this.routesRepository.find();
  }
}
