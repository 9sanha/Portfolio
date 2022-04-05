import post from './post';
import get from './get';
import { updateRoutes } from './update';
import { deleteRoutes } from './delete';
import { postIdRoutes } from './_postId';


export const postsRoutes = [...deleteRoutes, ...updateRoutes, ...postIdRoutes, post, get];