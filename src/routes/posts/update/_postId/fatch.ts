import { Spec } from "koa-joi-router";
import { PostService } from "../../../../services/post/application/service";
import Container from "typedi";
export default {
    path: '/posts/update/:postId',
    method: 'patch',
    handler: async (ctx) => {
        
        const postId = Number(ctx.request.params.postId);
        
        const patchData:{title?:string, text?: string} = ctx.request.body;
        
        const service = Container.get(PostService);
        
        const data = await service.update(postId,patchData); 
        
        ctx.body = { data };
    }
}as Spec;