import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken"
import { COOKIE_NAME } from "./constants.js";
import { log } from "console";
import { resolve } from "path";
import { rejects } from "assert";

export const createToken = (id: string,email:string,expiresIn)=>{
    const payload={id,email};
    const jwtSecret= process.env.JWT_SECRET;
    const token= jwt.sign(payload,jwtSecret,{
        expiresIn,
    });
    return token;
};

export const verifyToken =async (req:Request,res:Response,next:NextFunction) => {
    const token= req.signedCookies[`${COOKIE_NAME}`];
    if(!token || token.trim()===""){
        return res.status(401).json({message:"Token Not Received"});
    }
    return new Promise<void>((resolve,reject)=>{
        return jwt.verify(token,process.env.JWT_SECRET,(err,success)=>{
            if(err){
                reject(err.message);
                return res.status(401).json({message:"Token Expired"})
            }else{
                resolve();
                res.locals.jwtData =success;
                return next();
            }
        })
    })
    
}