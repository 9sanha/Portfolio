import { Joi, Spec } from "koa-joi-router";
import { PostService } from "../../../../services/post/application/service";
import Container from "typedi";
const paramsSchema = {
    postId: Joi.number().description('게시물 아이디'),
};
export default {
    path:'/posts/delete/:postId',
    method:'delete',
    meta: {
        swagger: {
            summary: '게시물 삭제',
            descriptions: '추후에 restore 가능',
            tags: ['posts']
        }
    },
    validate: {
        type: 'form',
        params: paramsSchema,
        output: {
            200:{
                body: {}
            },
        },
    },
    handler: async (ctx) => {
        const postId = Number(ctx.request.params.postId);

        const service = Container.get(PostService);

        service.delete(postId);
        ctx.status = 200;
        ctx.body = 'Success';

    }

} as Spec;