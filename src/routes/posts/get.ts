import { Spec } from "koa-joi-router";
import { PostService } from "../../services/post/application/service";
import Container from "typedi";

export default {
    path: '/posts',
    method: 'get',
    handler: async (ctx) => {
        
        const service = Container.get(PostService);
        
        const data = await service.list();
        
        ctx.body = { data };
    }
} as Spec;