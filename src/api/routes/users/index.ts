import { Router } from 'express';
import multer from 'multer';
import { UsersController } from 'src/api/controllers/users';
import { isAuthenticated } from 'src/api/middleware/authentication';
import { validateCreate } from 'src/api/middleware/users';
import uploadConfig from 'src/utils/multer';

const usersRouter = Router();
const usersController = new UsersController();

const uploadPath = multer(uploadConfig);

usersRouter.get('/', isAuthenticated, usersController.findAll);

usersRouter.post('/', validateCreate(), isAuthenticated, usersController.createUser)

usersRouter.patch(
  '/avatar',
  isAuthenticated,
  uploadPath.single('avatar'),
  usersController.updateUserAvatar
);

export default usersRouter;
