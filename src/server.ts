import * as Koa from 'koa';
import * as cors from '@koa/cors';
import * as bodyParser from 'koa-body';
import { router } from './routes';
import { AppDataSource } from './lib/typeorm';
import 'reflect-metadata';
import { errorHandlerMiddleware } from './middlewares/error-handler';

const app = new Koa();
AppDataSource.initialize();
const port = Number(process.env.SERVER_PORT);

app.use(bodyParser());
app.use(cors());
app.use(errorHandlerMiddleware);
app.use(router.middleware());

app.listen(port);
