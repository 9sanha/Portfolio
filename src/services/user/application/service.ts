import { badRequest } from '../../../const/boom';
import { getToken } from '../../../lib/jwt';
import { Service } from 'typedi';

@Service()
export class UserService {
    login(id: string, password: string) {
        const token = this.isUser(id, password) && getToken(id);
        if (token) {
            return token;
        } else {
            throw badRequest.WRONG_USER_INFO;
        }
    }

    isUser(id: string, password: string) {
        return id === process.env.AUTH_USER_ID && password === process.env.AUTH_USER_PASSWORD;
    }

    getToken(id: string) {
        return getToken(id);
    }
}
