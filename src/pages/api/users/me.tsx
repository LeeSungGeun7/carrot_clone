import {withIronSessionApiRoute} from "iron-session/next";

import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "../../../../libs/server/client";

import { NextApiRequest,  NextApiResponse } from "../../../../node_modules/next/dist/shared/lib/utils";
import { withApiSession } from "@libs/server/withSession";


declare module "iron-session" {
    interface IronSessionData {
        user?: {
            id: number;
        }
    }
}


const twilioClient = require("twilio")(
    process.env.TWILIO_SID,
    process.env.TWILIO_TOKEN
    );

async function handler(
    req:NextApiRequest, 
    res:NextApiResponse<ResponseType>
) {
   

    const profile = await client.user.findUnique({
        where : { id : req.session.user?.id},
    });
    res.json({
        ok: true,
        profile,
    })
    res.status(200).end();
    

}

export default withApiSession(
    withHandler(
    {
    methods:["GET"] ,
    handler,
    }))
    ;

