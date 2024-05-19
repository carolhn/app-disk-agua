import { Request, Response } from 'express';
import { UsersService } from 'src/api/services/users';

export class UsersController {

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const users = new UsersService();
      const allUsers = await users.findAll();
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email, password, avatar } = req.body;

    try {
      const users = new UsersService();
      const createNewUser = await users.createUser({ name, email, password, avatar });
      return res.status(201).json(createNewUser);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async updateUserAvatar(req: Request, res: Response): Promise<Response> {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'File is required' });
      }

      const usersAvatar = new UsersService();

      const updatedUserAvatar = await usersAvatar.updateUserAvatar({
        userId: req.user.id,
        avatarFileName: req.file.filename,
       });

      return res.status(200).json(updatedUserAvatar);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
