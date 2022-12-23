import { db } from "./db";

export async function fetchUsers() {
  return await db.selectFrom("user").selectAll().execute();
}
