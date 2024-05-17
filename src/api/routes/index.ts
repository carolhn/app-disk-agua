import { Router } from 'express';
import productsRouter from './products';
import usersRouter from './users';
import authenticationRouter from './users/authentication';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/authentication', authenticationRouter);

export default routes;
