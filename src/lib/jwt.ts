import * as jwt from 'jsonwebtoken';

const jwtKey = process.env.JWT_SECRETE_KEY ?? '';

export const getToken = (data: string) => {
    return jwt.sign(data, jwtKey);
};
