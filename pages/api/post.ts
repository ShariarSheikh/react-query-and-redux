// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Post, posts } from "./posts-data";

export default function post(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Post[] }>
) {
  res.status(200).json({ data: posts });
}
