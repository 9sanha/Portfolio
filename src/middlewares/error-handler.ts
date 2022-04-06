import { isBoom } from '@hapi/boom';
import { ValidationError } from 'joi';
import { Context } from 'koa';

const isJoi = (err: any): err is ValidationError => Boolean(err.isJoi);

export const errorHandlerMiddleware = async (ctx: Context, next: () => Promise<any>) => {
    try {
        await next();
    } catch (err) {
        const res: { code: number; msg: string } = {
            code: 0,
            msg: '',
        };
        if (isJoi(err)) {
            res.msg = err.message;
            res.code = 400;
            console.error(`[ Error ] code: ${res.code}, msg: ${res.msg}`);
            ctx.body = res;
        } else {
        }
        if (isBoom(err)) {
            res.msg = err.message;
            res.code = err.output.statusCode;
            console.error(`[ Error ] code: ${res.code}, msg: ${res.msg}`);
            ctx.body = res;
        }
    }
};
