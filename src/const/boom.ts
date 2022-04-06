import * as boom from '@hapi/boom';

export const NO_EXIST_ENTITY_ERROR = boom.badRequest('The entity does not exist');
export const badRequest = {NO_EXIST_ENTITY_ERROR}
