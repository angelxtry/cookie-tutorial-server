import { Request, Response } from 'express';
import { USERS } from './userData';

export const me = async (_: Request, res: Response) => {
  const { email }: { email: string } = res.locals.decoded.user;
  try {
    const authUser = USERS.filter((user) => user.email === email)[0];

    if (!authUser) return res.sendStatus(401);

    return res.status(200).send(authUser);
  } catch (e) {
    return res.sendStatus(500);
  }
};
