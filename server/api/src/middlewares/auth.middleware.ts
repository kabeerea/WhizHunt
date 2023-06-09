import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken'
import { IGetUserAuthInfoRequest, TokenPayload } from '../global/types';
import { userRoles } from '../helpers/constants';

export const authenticateJWT = (
    req: IGetUserAuthInfoRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user: TokenPayload) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            return next();
        });
    } else {
        return res.sendStatus(401);
    }
};

export const authenticateAdmin = (
    req: IGetUserAuthInfoRequest,
    res: Response,
    next: NextFunction
) => {
    if (req.user?.role === userRoles.admin) {
        return next();
    }
    return res.sendStatus(403);
};