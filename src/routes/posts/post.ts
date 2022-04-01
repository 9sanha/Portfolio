import { Spec } from 'koa-joi-router';
import { PostService } from '../../services/post/application/service';
import { TypeOfPost } from '../../services/post/domain/model';
import Container from 'typedi';

export default {
    path:'/posts',
    method:'post',
    handler: async (ctx) => {
        console.log('여기까지 오나?');
    
        const service = Container.get(PostService);
        const post: TypeOfPost = ctx.request.body;
        ctx.body = service.register(post);
    },
} as Spec;