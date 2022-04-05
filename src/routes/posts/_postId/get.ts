import { Joi, Spec } from "koa-joi-router";
import { PostService } from "../../../services/post/application/service";
import Container from "typedi";

const paramsSchema = {
    postId: Joi.number().description('게시물 아이디'),
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

export default {
    path: '/posts/:postId',
    method: 'get',
    meta: {
        swagger: {
            summary: '게시물 상세 조회',
            descriptions: '게시글의 전체 본문과 댓글을 볼 수 있다.',
            tags: ['posts']
        }
    },
    validate: {
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
        
        const postId  = Number(ctx.request.params.postId);
        
        const service = Container.get(PostService);
        
        const data = await service.getPostById(postId); 
        
        ctx.body = { data };
    }
}as Spec;
