import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/AppointmentsController';

const providersRouter = Router();
const providersController = new ProvidersController();
providersRouter.use(ensureAuthenticated);

providersRouter.post('/', providersController.create);

export default providersRouter;
