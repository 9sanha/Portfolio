import { Spec } from "koa-joi-router";
import { PostService } from "../../services/post/application/service";
import Container from "typedi";

export default {
    path: '/comments',
    method: 'post',
    handler: async (ctx) => {
        
        const {postId, nickname, context, password} = ctx.request.body;
        
        const service = Container.get(PostService);
        
        const data = await service.registerComment(Number(postId), {nickname, context, password})
        
        ctx.body =  data ;
    }
} as Spec;