import { AuthenticationService } from '@services/users/authentication';
import { Request, Response } from 'express';

export class AuthenticationController {

  async createAuthentication(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const authentication  = new AuthenticationService();
      const authenticatedUser = await authentication.createAuthentication({ email, password });

      return res.status(200).json(authenticatedUser);
    } catch (error: any) {
      if (error.statusCode) {
        return res.status(error.statusCode).json({ error: error.message });
      }
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}
