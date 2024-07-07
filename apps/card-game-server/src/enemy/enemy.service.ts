import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EnemyServiceBase } from "./base/enemy.service.base";

@Injectable()
export class EnemyService extends EnemyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
