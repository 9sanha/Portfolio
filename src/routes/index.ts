import { postsRoutes } from "./posts";
import { commentsRoutes } from "./comments";
import * as Router from "koa-joi-router"
export const globalRouter = Router();

globalRouter.route([...postsRoutes,...commentsRoutes]);