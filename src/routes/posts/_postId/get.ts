import { Spec } from "koa-joi-router";
import { PostService } from "../../../services/post/application/service";
import Container from "typedi";

export default {
    path: '/posts/:postId',
    method: 'get',
    handler: async (ctx) => {
        
        const postId  = Number(ctx.request.params.postId);
        
        const service = Container.get(PostService);
        
        const data = await service.getPostById(postId); 
        
        ctx.body = data;
    } 
}as Spec;
