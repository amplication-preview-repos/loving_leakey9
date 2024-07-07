import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EnemyService } from "./enemy.service";
import { EnemyControllerBase } from "./base/enemy.controller.base";

@swagger.ApiTags("enemies")
@common.Controller("enemies")
export class EnemyController extends EnemyControllerBase {
  constructor(protected readonly service: EnemyService) {
    super(service);
  }
}
