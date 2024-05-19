import { hash } from 'bcryptjs';
import fs, { existsSync } from 'fs';
import path from 'path';
import { RequestAvatarType, UserType } from 'src/api/types/users';
import UsersModel from 'src/database/models/users';
import { AppError } from 'src/utils/errors';
import uploadFolder from 'src/utils/multer';

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

  async updateUserAvatar({ avatarFileName, userId}: RequestAvatarType): Promise<UsersModel> {
    const user = await UsersModel.findByPk(userId);
    if (!user) {
      throw AppError('User not found', 404);
    }

    if(user.avatar) {
      const userAvatar = path.join(uploadFolder.directory, user.avatar);
      const userAvatarExists = existsSync(userAvatar);

      if (userAvatarExists) {
        await fs.promises.unlink(userAvatar);
      }
    }

    user.avatar = avatarFileName;
    return await user.save();
  }
}
