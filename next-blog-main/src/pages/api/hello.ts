// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const hello = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: "Krishnan Navadia" });
};

export default hello;
