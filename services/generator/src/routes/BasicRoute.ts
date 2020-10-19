import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';

import { paramMissingError } from '@shared/constants';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    return res.status(OK).json({status: 'hello world'});
});

export default router;
