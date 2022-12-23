import { NextApiRequest, NextApiResponse } from "next";
import { fetchUsers } from "../../lib/queries";

type Data = {
  id: number;
  name: string;
  age: number;
  weight: number;
  goal_weight: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const users = fetchUsers();
  res.status(200).json(users);
}
