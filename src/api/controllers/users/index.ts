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
}
