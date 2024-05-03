import { AuthenticationController } from '@controllers/users/authentication';
import { Router } from 'express';
import { validateAuth } from 'src/api/middleware/users';

const userAuthRouter = Router();
const usersController = new AuthenticationController();

userAuthRouter.post('/', validateAuth(), usersController.authenticationUser)

export default userAuthRouter;
