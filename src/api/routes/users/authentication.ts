import { AuthenticationController } from '@controllers/users/authentication';
import { Router } from 'express';
import { validateAuth } from 'src/api/middleware/users';

const authenticationRouter = Router();
const authentication = new AuthenticationController();

authenticationRouter.post('/', validateAuth(), authentication.createAuthentication)

export default authenticationRouter;
