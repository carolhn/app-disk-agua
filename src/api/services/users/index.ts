import UserToken from 'src/database/models/users/userToken';

export class UserTokenService {

  async findByToken(token: string): Promise<UserToken | null> {
    return await UserToken.findOne({ where: { token } })!;
  }
}

