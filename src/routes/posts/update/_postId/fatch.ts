import { Joi, Spec } from "koa-joi-router";
import { PostService } from "../../../../services/post/application/service";
import Container from "typedi";

const bodySchema = {
    title: Joi.string().description('게시물 제목'),
    text: Joi.string().description('게시글 본문'),
};
const outputSchema = {
    comments: Joi.array().required().description('댓글'),
    text: Joi.string().required().description('본문'),
    title: Joi.string().required().description('제목'),
    img: Joi.string().required(),
    id: Joi.number().required(),
    createdAt: Joi.date().required(),
    updatedAt: Joi.date().required(),
};
const paramsSchema = {
    postId: Joi.number().description('게시물 아이디'),
};

export default {
    path: '/posts/update/:postId',
    method: 'patch',
    meta: {
        swagger: {
            summary: '게시물 수정',
            descriptions: '제목과 본문을 수정할 수 있다.',
            tags: ['posts']
        }
    },
    validate: {
        type: 'form',
        body: bodySchema,
        params: paramsSchema,
        output: {
            200:{
                body: {
                    data: {...outputSchema},
                }
            },
        },
    },
    handler: async (ctx) => {
        
        const postId = Number(ctx.request.params.postId);
        
        const patchData:{title?:string, text?: string} = ctx.request.body;
        
        const service = Container.get(PostService);
        
        const data = await service.update(postId,patchData); 
        
        ctx.body = { data };
    }
}as Spec;