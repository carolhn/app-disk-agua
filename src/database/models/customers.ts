import sequelize, { Model } from 'sequelize'
import db from '.'

class Customers extends Model {
  declare id: Number
  declare name: String
  declare phone: String
  declare typyDocument: String
  declare cpfCnpj: String
  declare address: String
}

Customers.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING(128),
      allowNull: false,
    },
    phone: {
      type: sequelize.STRING(128),
      allowNull: false,
    },
    typyDocument: {
      type: sequelize.STRING(128),
      allowNull: false,
    },
    cpfCnpj: {
      type: sequelize.STRING(128),
      allowNull: false,
    },
    address: {
      type: sequelize.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'customers',
    sequelize: db,
    timestamps: false,
    underscored: true,
  }
)

export default Customers;
