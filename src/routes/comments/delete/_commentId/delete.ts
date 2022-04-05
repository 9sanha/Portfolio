import { Joi, Spec } from "koa-joi-router";
import { CommentService } from "../../../../services/comment/application/service";
import Container from "typedi";

const paramsSchema = {
    commentId: Joi.string().description('댓글 아이디'),
};

export default {
    path: '/comments/delete/:commentId',
    method: 'delete',
    meta: {
        swagger: {
            summary: '댓글 삭제',
            descriptions: '추후에 restore 가능',
            tags: ['comments']
        }
    },
    validate: {
        params: paramsSchema,
        output: {
            200:{
                body: {}
            },
        },
    },
    handler: async (ctx) => {

        const commentId = Number(ctx.request.params.commentId);
        
        
        const service = Container.get(CommentService);
        
        service.delete(commentId);
        
        ctx.status = 200;
        ctx.body = {};
        
    }
} as Spec;