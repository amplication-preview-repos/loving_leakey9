import * as graphql from "@nestjs/graphql";
import { EnemyResolverBase } from "./base/enemy.resolver.base";
import { Enemy } from "./base/Enemy";
import { EnemyService } from "./enemy.service";

@graphql.Resolver(() => Enemy)
export class EnemyResolver extends EnemyResolverBase {
  constructor(protected readonly service: EnemyService) {
    super(service);
  }
}
