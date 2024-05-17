import { Router } from 'express';
import { UsersController } from 'src/api/controllers/users';
import { validateCreate } from 'src/api/middleware/users';


const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', usersController.findAll);

usersRouter.post('/', validateCreate(), usersController.createUser)

export default usersRouter;
