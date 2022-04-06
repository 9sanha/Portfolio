import { Joi, Spec } from 'koa-joi-router';
import { PostService } from '../../services/post/application/service';
import { TypeOfPost } from '../../services/post/domain/model';
import Container from 'typedi';

const bodySchema = {
    title: Joi.string().required().description('게시물 제목'),
    img: Joi.string().description('이미지 파일'),
    text: Joi.string().required().description('게시글 본문'),
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
    path: '/posts',
    method: 'post',
    meta: {
        swagger: {
            summary: '게시물 생성',
            descriptions: '운영자만 게시물을 작성할 수 있다.',
            tags: ['posts'],
        },
    },
    validate: {
        type: 'form',
        body: bodySchema,
        output: {
            200: {
                body: {
                    data: { ...outputSchema },
                },
            },
        },
    },
    handler: async (ctx) => {
        const service = Container.get(PostService);

        const post: TypeOfPost = ctx.request.body;

        const data = await service.register(post);

        ctx.body = { data };
    },
} as Spec;
