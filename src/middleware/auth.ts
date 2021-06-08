import { Request, Response, NextFunction } from 'express';
import { decode } from '../Utils/jwt';

export async function authByToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header('authorization')?.split(' ');

    if(!authHeader) return res.status(401).send({
        err: "autorization failed"
    });

    if(authHeader[0] !== 'Token') return res.status(401).send({
        err: "autorization failed Token missing"
    });

    try {
        const token = authHeader[1];
        const user = decode(token);
        if(!user) throw new Error("NO user found");
        (req as any).user = user;
        return next();
    } catch (e) {
        res.send(500).send(e);
    };
};