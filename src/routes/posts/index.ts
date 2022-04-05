import { Spec } from 'koa-joi-router';
import post from './post';
import get from './get';
import { updateRoutes } from './update';
import { deleteRoutes } from './delete';

export const postsRoutes = [...deleteRoutes,...updateRoutes, post, get];