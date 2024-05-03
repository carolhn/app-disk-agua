import { Request, Response } from 'express';
import { UsersService } from 'src/api/services/users';

export class UsersController {

  async findUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = new UsersService();
      const allUsers = await users.findUsers();
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email, password, avatar } = req.body;
    try {
      const users = new UsersService();
      const newUser = await users.createUser({ name, email, password, avatar });
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
