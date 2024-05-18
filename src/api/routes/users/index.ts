import { Router } from 'express';
import { UsersController } from 'src/api/controllers/users';
import { isAuthenticated } from 'src/api/middleware/authentication';
import { validateCreate } from 'src/api/middleware/users';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.findAll);

usersRouter.post('/', validateCreate(), isAuthenticated, usersController.createUser)

export default usersRouter;
