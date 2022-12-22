import { Pool } from 'pg';
import {
  Kysely,
  PostgresDialect,
  Generated,
  ColumnType,
  Selectable,
  Insertable,
  Updateable,
} from 'kysely';
import Cursor from 'pg-cursor';

interface Database {
  'public.user': UserTable;
}

interface UserTable {
  id: Generated<number>;
  name: string;
  age: number;
  weight: number;
  goal_weight: number;
}

const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      host: 'localhost',
      port: 8080,
      user: 'admin',
      password: 'admin',
      database: 'workouts',
    }),
    cursor: Cursor,
  }),
});

export async function fetchUsers() {
  for await (const users of db.selectFrom('public.user').selectAll().stream()) {
    console.log(users);
    return users;
  }
}
