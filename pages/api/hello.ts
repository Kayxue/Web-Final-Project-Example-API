import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const file = await fs.readFile(process.cwd() + '/public/StackExample.json', 'utf8');
  res.status(200).send(file)
}
