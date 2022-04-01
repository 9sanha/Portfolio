import { postsRoutes } from "../routes/posts";
import * as Router from "koa-joi-router"
export const globalRouter = Router();

globalRouter.route([...postsRoutes]);