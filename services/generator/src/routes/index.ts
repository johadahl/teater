import { Router } from 'express';
import { basicRoute } from './BasicRoute';
import { getSuggestions } from './getSuggestions';

const router = Router();

router.get('/basic', basicRoute)

export default router;
