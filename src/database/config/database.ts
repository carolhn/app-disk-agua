import 'dotenv/config';
import { Options } from 'sequelize';

const { PG_USER, PG_PASSWORD, PG_DATABASE, PG_HOST, PG_PORT } = process.env;

const config: Options = {
  username: PG_USER || 'root',
  password: PG_PASSWORD || 'docker',
  database: PG_DATABASE || 'app-disk-agua',
  host: PG_HOST || 'db',
  port: Number(PG_PORT),
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = config;
