import {withIronSessionApiRoute} from "iron-session/next";

import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

import { NextApiRequest,  NextApiResponse } from "../../../../../node_modules/next/dist/shared/lib/utils";
import { withApiSession } from "@libs/server/withSession";


async function handler(
    req:NextApiRequest, 
    res:NextApiResponse<ResponseType>
) {
    const { 
        query: {id},
        session : {user} ,
    } = req;
    const alreadyExists = await client.wondering.findFirst({
        where : {
            userId : user?.id,
            postId: +id.toString(),
        },
        select : {
            id : true,
        }
    })
    if(alreadyExists) {
        await client.wondering.delete({
          where: {
            id: alreadyExists.id,
          }
        });
      } else {
        await client.wondering.create({
          data: {
            userId: user?.id, // userId 필드에 직접 할당
            postId: +id.toString(), // postId 필드에 직접 할당
            // 'user'와 'post' 관계는 자동으로 처리됩니다.
          }
        });
      }
    res.json({
        ok: true,
    });

    

}

export default withApiSession(
    withHandler(
    {
    methods:["POST"] ,
    handler,
    }))
    ;

