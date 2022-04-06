import * as boom from '@hapi/boom';

const NO_EXIST_ENTITY_ERROR = boom.badRequest('The entity does not exist');
const WRONG_USER_INFO = boom.badRequest('check your id or password');
export const badRequest = { NO_EXIST_ENTITY_ERROR, WRONG_USER_INFO };
