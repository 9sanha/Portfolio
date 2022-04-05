import { Spec } from 'koa-joi-router';
import { PostService } from '../../services/post/application/service';
import { TypeOfPost } from '../../services/post/domain/model';
import Container from 'typedi';

export default {
    path:'/posts',
    method:'post',
    handler: async (ctx) => {
        const service = Container.get(PostService);

        const post: TypeOfPost = ctx.request.body;

        const data = await service.register(post); 
        
        ctx.body = data;
    },
} as Spec;