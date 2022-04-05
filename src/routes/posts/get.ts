import { Joi, Spec } from "koa-joi-router";
import { PostService } from "../../services/post/application/service";
import Container from "typedi";

const outputSchema =  Joi.array().items(
        Joi.object({
            id: Joi.number().required(),
            text: Joi.string().required().description('본문'),
            title: Joi.string().required().description('제목'),
            img: Joi.string().required(),
            createdAt: Joi.date().required(),
            updatedAt: Joi.date().required(),
        })
)

export default {
    path: '/posts',
    method: 'get',
    meta: {
        swagger: {
            summary: '게시물 전체 조회',
            descriptions: '게시물을 전체 조회합니다.',
            tags: ['posts']
        }
    },
    validate: {
        output: {
            200:{
                body: {
                    data: outputSchema,
                }
            },
        },
    },
    handler: async (ctx) => {
        
        const service = Container.get(PostService);
        
        const data = await service.list();
        
        ctx.body = { data };
    }
} as Spec;