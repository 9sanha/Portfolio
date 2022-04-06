import { Joi, Spec } from 'koa-joi-router';
import { PostService } from '../../services/post/application/service';
import Container from 'typedi';

const bodySchema = {
    postId: Joi.number().required().description('게시물 아이디'),
    nickname: Joi.string().required().description('댓글 작성자 닉네임'),
    password: Joi.string().required().description('댓글 비밀번호'),
    context: Joi.string().required().description('댓글'),
};
const outputSchema = {
    id: Joi.number().required().description('게시물 아이디'),
    nickname: Joi.string().required().description('댓글 작성자 닉네임'),
    password: Joi.string().required().description('댓글 비밀번호'),
    context: Joi.string().required().description('댓글'),
    createdAt: Joi.date().description('생성일'),
    updatedAt: Joi.date().description('수정일'),
    deletedAt: Joi.date().allow(null).description('삭제일'),
};

export default {
    path: '/comments',
    method: 'post',
    meta: {
        swagger: {
            summary: '댓글 등록',
            descriptions: '댓글 등록',
            tags: ['comments'],
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
        const { postId, nickname, context, password } = ctx.request.body;

        const service = Container.get(PostService);

        const data = await service.registerComment(Number(postId), { nickname, context, password });

        ctx.body = { data };
    },
} as Spec;
