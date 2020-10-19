import { Router } from 'express';
import {basicRoute} from './BasicRoute';
import {getSuggestions} from './GetSuggestions';


const router = Router();

router.get('/', basicRoute)
router.post('/getSuggestions', getSuggestions)

export default router;
