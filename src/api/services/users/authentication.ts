import { UsersService } from 'src/api/services/users';
import { AuthUser } from 'src/api/types/users';
import UsersModel from 'src/database/models/users';
import { CompareHash } from 'src/utils/authentication/crypto';
import { AppError } from 'src/utils/errors';

export class AuthenticationService {

  async authenticationUser({ email, password }: AuthUser): Promise<UsersModel | null> {
    const serviceUser = new UsersService();

    try {
      const user = await serviceUser.findByEmail(email);

      if (!user) {
        throw AppError('User not found', 404);
      }

      const passwordConfirmed = CompareHash(password, user.password);

      if (!passwordConfirmed) {
        throw AppError('Incorrect password', 401);
      }

      return user;
    } catch (error) {
      console.error(error);
      throw AppError('Error during authentication', 500);
    }
  }
}
