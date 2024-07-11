import { NextRequest } from "next/server";

import db from "../../../../../../prisma/db";

type GetParams = {
  params: {
    id: string;
  };
};

export async function GET(_request: NextRequest, { params }: GetParams) {
  const replies = await db.comment.findMany({
    where: {
      parentId: params.id,
    },
    include: {
      author: true,
    },
  });

  return Response.json(replies);
}
