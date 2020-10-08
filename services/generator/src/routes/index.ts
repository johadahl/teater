import { Router } from 'express';
import BasicRoute from './BasicRoute';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/', BasicRoute);


// Export the base-router
export default router;
