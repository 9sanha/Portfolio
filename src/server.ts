import * as Koa from 'koa';

const app = new Koa();
const port = 3000;

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(port);