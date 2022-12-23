import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";
import Cursor from "pg-cursor";
import { Database } from "./schema";

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      host: "localhost",
      port: 5432,
      user: "admin",
      password: "admin",
      database: "postgres",
    }),
    cursor: Cursor,
  }),
});
