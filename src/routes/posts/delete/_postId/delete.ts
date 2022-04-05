import { Spec } from "koa-joi-router";
import { PostService } from "../../../../services/post/application/service";
import Container from "typedi";

export default {
    path:'/posts/delete/:postId',
    method:'delete',
    handler: async (ctx) => {
        const postId = Number(ctx.request.params.postId);

        const service = Container.get(PostService);

        service.delete(postId);

        ctx.body = { code: 200 };

    }

} as Spec;