import { postsRoutes } from './posts';
import { commentsRoutes } from './comments';
import * as Router from 'koa-joi-router';
import { SwaggerAPI } from 'koa-joi-router-docs';
import { loginsRoutes } from './logins';

export const router = Router();
router.route([...postsRoutes, ...commentsRoutes, ...loginsRoutes]);

const generator = new SwaggerAPI();
generator.addJoiRouter(router);

const spec = generator.generateSpec({
    info: {
        title: 'Title',
        description: '포폴용 개인 블로그',
        version: '1',
    },
    basePath: '/',
    tags: [
        {
            name: 'comments',
            description: `댓글`,
        },
        {
            name: 'logins',
            description: `로그인`,
        },
        {
            name: 'posts',
            description: `게시글`,
        },
        {
            name: 'profiles',
            description: `프로필`,
        },
    ],
});
router.get('/_api.json', async (ctx) => {
    ctx.body = JSON.stringify(spec, null, '  ');
});

router.get('/apiDocs', async (ctx) => {
    ctx.body = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Profile API</title>
    </head>
    <body>
        <redoc spec-url='/_api.json' lazy-rendering></redoc>
        <script src="https://rebilly.github.io/ReDoc/releases/latest/redoc.min.js"></script>
    </body>
    </html>
    `;
});
