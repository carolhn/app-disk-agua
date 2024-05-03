import { Router } from 'express';
import productsRouter from './products';
import usersRouter from './users';
import userAuthRouter from './users/authentication';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/authentication', userAuthRouter);

export default routes;
