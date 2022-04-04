import { Spec } from 'koa-joi-router';
import post from './post';
import get from './get';
import { postIdRoutes } from './_postId';
import { updateRoutes } from './update';

export const postsRoutes: Spec[] = [...postIdRoutes,...updateRoutes, post, get];