import { Module } from "@nestjs/common";
import { EnemyModuleBase } from "./base/enemy.module.base";
import { EnemyService } from "./enemy.service";
import { EnemyController } from "./enemy.controller";
import { EnemyResolver } from "./enemy.resolver";

@Module({
  imports: [EnemyModuleBase],
  controllers: [EnemyController],
  providers: [EnemyService, EnemyResolver],
  exports: [EnemyService],
})
export class EnemyModule {}
