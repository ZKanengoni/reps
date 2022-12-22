import { Generated } from 'kysely';
import { NextApiRequest, NextApiResponse } from 'next';
import { fetchUsers } from '../../lib/db';

type Data = {
  id: Generated<number>;
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
