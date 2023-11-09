
import smtpTransport from "@libs/server/email";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "../../../../libs/server/client";

import { NextApiRequest, NextApiResponse } from "../../../../node_modules/next/dist/shared/lib/utils";


const twilioClient = require("twilio")(
    process.env.TWILIO_SID,
    process.env.TWILIO_TOKEN
    );

async function handler(
    req:NextApiRequest, 
    res:NextApiResponse<ResponseType>
) {
   const {phone , email } =req.body;

 

   const user = phone ? { phone : phone} : email ? {email} : null;
   if(!user) return res.status(400).json({ok : false});
   const payload = Math.floor(100000+ Math.random() * 900000) + ""
   const token = await client.token.create({
        data: {
            payload: payload , 
            user : {
                connectOrCreate : { 
                    where : {
                        ...user,
                    } , 
                    create : { 
                        name : "Anonymous" , 
                        ...user
                    }            
                } 
               
            } 
        }
   });
   if (phone) {
    // const message = await twilioClient.messages.create({
    //     messagingServiceSid: process.env.TWILIO_MSID,
    //     to: process.env.MY_PHONE!,
    //     body: `Your login token is ${payload}.`,
    //   });
    //   console.log(message);
    }

    if (email) {
    //     const mailOptions = {
    //     from: process.env.MAIL_ID,
    //     to: email,
    //     subject: "Nomad Carrot Authentication Email",
    //     html: `
    //     <h1 style="color: yellow">당근마켓에 온걸 환영해 !!</h1>
    //     <p style="color: lightblue; font-size: 16px">인증용 코드 : <strong>${payload}</strong></p>
    // `
    //     // text: `Authentication Code : ${payload}`,
    //     };
    //     const result = await smtpTransport.sendMail(
    //     mailOptions,
    //     (error:any, responses:any) => {
    //     if (error) {
    //     console.log(error);
    //     return null;
    //     } else {
    //     console.log(responses);
    //     return null;
    //     }
    //     }
    //     );
    //     smtpTransport.close();
    //     console.log(result);
        }

   return res.json({
    ok: true,
   })
   console.log(token);


   
    return res.status(200).end();
}

export default withHandler({methods:["POST"] , handler, isPrivate:false});