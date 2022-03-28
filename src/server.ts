import * as Koa from 'koa';
import { connectDB } from './config/mysql'
import * as cors from 'koa-cors'
import * as bodyParser from 'koa-bodyparser'

const app = new Koa();
const connectDatabase = connectDB();
const port = 3000;

connectDatabase.then(()=>{
    console.log('DB')
})

app.use(async (ctx) => {
    bodyParser()
    cors({origin:'*'})
    ctx.body = {msg: 'Hello World'};
});

app.listen(port);