import UsersModel from 'src/database/models/users';

export type UserType = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};

export type RequestType = {
  email: string;
  password: string;
};

export type ResponseType = {
  user: UsersModel;
  token: string;
};
