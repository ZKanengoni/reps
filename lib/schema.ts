import { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
  user: UserTable;
}

interface UserTable {
  id: Generated<number>;
  name: string;
  age: number;
  weight: number;
  goal_weight: number;
}

export type UserRow = Selectable<UserTable>;
export type InsertableUserRow = Insertable<UserTable>;
export type UpdateableUserRow = Updateable<UserTable>;
