import { Enemy as TEnemy } from "../api/enemy/Enemy";

export const ENEMY_TITLE_FIELD = "id";

export const EnemyTitle = (record: TEnemy): string => {
  return record.id?.toString() || String(record.id);
};
