import { Joi, Spec } from 'koa-joi-router';
import { UserService } from '../../services/user/application/service';
import Container from 'typedi';

const bodySchema = {
    id: Joi.string().required().description('관리자 아이디'),
    password: Joi.string().required().description('관리자 비밀번호'),
};
const outputSchema = { token: Joi.string().required().description('JWT') };

export default {
    path: '/logins',
    method: 'post',
    meta: {
        swagger: {
            summary: '관리자 로그인',
            descriptions: '관리자 권한을 얻을 수 있는 로그인 ',
            tags: ['logins'],
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
        const { id, password } = ctx.request.body;

        const service = Container.get(UserService);

        const token = service.login(id, password);
        console.log(token);

        ctx.body = { data: { token } };
    },
} as Spec;
