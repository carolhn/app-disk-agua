import { hash } from 'bcryptjs';
import { UserType } from 'src/api/types/users';
import UsersModel from 'src/database/models/users';
import { AppError } from 'src/utils/errors';

export class UsersService {

  async findByName(name: string): Promise<UsersModel | null> {
    return await UsersModel.findOne({ where: { name } });
  }

  async findByEmail(email: string): Promise<UsersModel | null> {
    return await UsersModel.findOne({ where: { email } });
  }

  async findUsers(): Promise<UsersModel[]> {
    return await UsersModel.findAll();
  }

  async createUser({ name, email, password, avatar }: UserType): Promise<UsersModel> {
    const emailExists = await this.findByEmail(email);
    if (emailExists) {
      throw AppError('Email address already used');
    }

    const hasPassword = await hash(password, 8);
    return await UsersModel.create({ name, email, password: hasPassword, avatar });
  }
}
