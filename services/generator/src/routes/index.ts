import { Router } from 'express';
import {basicRoute} from './BasicRoute';
import {getSuggestions} from './getSuggestions';


const router = Router();

router.get('/', basicRoute)
router.post('/getSuggestions', getSuggestions)

export default router;
