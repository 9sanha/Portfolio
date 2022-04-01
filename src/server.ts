import * as Koa from 'koa';
import * as cors from 'koa-cors'
import * as bodyParser from 'koa-body'
import { globalRouter } from './routes';
import { AppDataSource } from './config/typeorm';
import "reflect-metadata"

const app = new Koa();
const dbConnection = AppDataSource.initialize();
// const port = Number(process.env.SERVER_PORT);
const port = 3000;
console.log(port);




app.use((ctx) => {
    bodyParser();
    cors({origin:'*'});
    globalRouter.middleware();
    console.log('ctx.body: ',ctx.body);
    
    console.log('요청');
    
});

app.listen(port);