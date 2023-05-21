import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import { IGetUserAuthInfoRequest, TokenPayload } from '../global/types';



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
            next();
        });
    } else {
        res.sendStatus(401);
    }
};