import post from './post';
import { deleteRoutes } from './delete';

export const commentsRoutes = [...deleteRoutes, post];