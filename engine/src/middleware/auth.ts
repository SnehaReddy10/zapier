import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { JWT_TOKEN } from '../config';

declare module 'express-serve-static-core' {
  interface Request {
    userId: string;
  }
}

type jsonPayload = {
  id: string;
  email: string;
};

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorizationToken = req.headers.authorization ?? '';

    if (authorizationToken == '') {
      return res.json({ success: false, message: 'Please login in' });
    }
    const accessToken = authorizationToken.slice(7, authorizationToken.length);

    const { id }: jsonPayload = jwt.verify(
      accessToken,
      JWT_TOKEN
    ) as jsonPayload;

    if (!id) {
      return res.json({ success: false, message: 'Please login in' });
    }
    req.userId = id;
    next();
  } catch (err) {
    console.log(err);
    return res.json({ success: false, message: 'Please login in' });
  }
}
