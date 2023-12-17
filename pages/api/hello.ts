import type { NextApiRequest, NextApiResponse } from 'next'
import StackExample from "../../public/StackExample.json"


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  res.status(200).send({...StackExample})
}
