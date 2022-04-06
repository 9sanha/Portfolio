import { isBoom } from "@hapi/boom";
import { Context } from "koa";

export const errorHandlerMiddleware = async (ctx:Context, next:()=> Promise<any>) => {
    try{
        await next();
    } catch (err) {
        const res:{code:number;msg:string}={
            code:0,
            msg:''
        }
        if (isBoom(err)) {
            res.msg = err.message;
            res.code = err.output.statusCode;
        }
        console.error(`[ Error ] code: ${res.code}, msg: ${res.msg}`);
        ctx.body = res;
    }

}