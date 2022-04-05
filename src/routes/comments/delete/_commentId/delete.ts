import { Spec } from "koa-joi-router";
import { CommentService } from "../../../../services/comment/application/service";
import Container from "typedi";

export default {
    path: '/comments/delete/:commentId',
    method: 'delete',
    handler: async (ctx) => {

        const commentId = Number(ctx.request.params.commentId);
        
        const service = Container.get(CommentService);
        
        const data = await service.delete(commentId);
        
        ctx.body = data;
        
    }
} as Spec;