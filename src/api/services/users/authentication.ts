
import { compare } from 'bcryptjs';
import { UsersService } from 'src/api/services/users';
import { RequestType, ResponseType } from 'src/api/types/users';
import { generateToken } from 'src/utils/authentication/token';
import { AppError } from 'src/utils/errors';

export class AuthenticationService {

  async createAuthentication({ email, password }: RequestType): Promise<ResponseType> {
    const users = new UsersService();
    const usersData = await users.findByEmail(email);

    if (!usersData) {
      throw AppError('Incorrect email/password combination', 401);
    }

    const passwordConfirmed = await compare(password, usersData.password);

    if (!passwordConfirmed) {
      throw AppError('Incorrect email/password combination --- erro aqui', 401);
    }

    const token = generateToken({ id: usersData.id });

    return {
      user: usersData,
      token,
    };
  }
}
