import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { user } from "../../helpers/utils";

interface ITokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Token is missing', status_code: 401 });
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        const { id } = data as ITokenPayload;
        if (user.id != id) return res.status(401).json({ message: 'Invalid authorization', status_code: 401 });

        return next();
    } catch (error) {
        return res.status(401).json({ message: error.message, status_code: 401 });
    }
}