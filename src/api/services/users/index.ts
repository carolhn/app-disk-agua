import { UserType } from 'src/api/types/users';
import UsersModel from 'src/database/models/users';
import { CreateHash } from 'src/utils/authentication/crypto';
import { AppError } from 'src/utils/errors';

export class UsersService {

  async findByName(name: string): Promise<UsersModel | null> {
    return await UsersModel.findOne({ where: { name } });
  }

  async findByEmail(email: string): Promise<UsersModel | null> {
    return await UsersModel.findOne({
      where: { email },
      attributes: { exclude: ['password'] } });
  }

  async findUsers(): Promise<UsersModel[]> {
    return await UsersModel.findAll();
  }

  async createUser({ name, email, password, avatar }: UserType): Promise<UsersModel> {
    try {
      const emailExists = await this.findByEmail(email);
      if (emailExists) {
        throw AppError('Email address already used', 400);
      }

      const passwordHash = CreateHash(password);
      return await UsersModel.create({ name, email, password: passwordHash, avatar });

    } catch (error) {
      console.error(error);
      throw AppError('Error creating user', 500);
    }
  }
}
