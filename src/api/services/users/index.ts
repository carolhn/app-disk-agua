import { hash } from 'bcryptjs';
import { UserType } from 'src/api/types/users';
import UsersModel from 'src/database/models/users';
import { AppError } from 'src/utils/errors';

export class UsersService {

  async findAll(): Promise<UsersModel[]> {
    return await UsersModel.findAll();
  }

  async findByName(name: string): Promise<UsersModel | null> {
    return await UsersModel.findOne({ where: { name } });
  }

  async findByEmail(email: string): Promise<UsersModel | null> {
    return await UsersModel.findOne({
      where: { email }, });
  }

  async createUser({ name, email, password, avatar }: UserType): Promise<UsersModel> {
    try {
      const emailExists = await this.findByEmail(email);
      if (emailExists) {
        throw AppError('Email address already used', 400);
      }

      const passwordHash = await hash(password, 8);

      return await UsersModel.create({ name, email, password: passwordHash, avatar });
    } catch (error) {
      throw AppError('Error creating user', 500);
    }
  }
}
