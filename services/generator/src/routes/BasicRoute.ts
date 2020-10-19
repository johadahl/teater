import { Request, Response } from 'express';
import { OK } from 'http-status-codes';

export const basicRoute = async (req: Request, res: Response) => {
  return res.status(OK).json({ status: 'hello world' });
}