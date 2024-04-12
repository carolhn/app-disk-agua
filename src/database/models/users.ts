import sequelize, { Model } from 'sequelize'
import db from '.'

class Users extends Model {
  declare id: number
  declare name: string
  declare email: string
  declare password: string
}

Users.init(
  {
    id: {
      type: sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING(128),
      allowNull: false,
    },
    email: {
      type: sequelize.STRING(128),
      allowNull: false,
    },
    password: {
      type: sequelize.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    sequelize: db,
    timestamps: false,
  }
)

export default Users;
