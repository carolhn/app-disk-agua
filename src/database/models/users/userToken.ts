import sequelize, { Model } from 'sequelize';
import db from '..';

class UserToken extends Model {
  declare id: Number;
  declare token: String;
  declare userId: Number;
}

UserToken.init(
  {
    id: {
      type: sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    token: {
      type: sequelize.STRING(128),
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: sequelize.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'user_tokens',
    sequelize: db,
    timestamps: false,
  }
)
export default UserToken;
