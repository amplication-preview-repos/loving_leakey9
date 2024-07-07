import { EnemyWhereInput } from "./EnemyWhereInput";
import { EnemyOrderByInput } from "./EnemyOrderByInput";

export type EnemyFindManyArgs = {
  where?: EnemyWhereInput;
  orderBy?: Array<EnemyOrderByInput>;
  skip?: number;
  take?: number;
};
