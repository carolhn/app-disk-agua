import sequelize, { Model } from 'sequelize'
import db from '.'

class Customers extends Model {
  declare id: number
  declare name: string
  declare phone: string
  declare typeDocument: string
  declare cpfCnpj: string
  declare address: string
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
    typeDocument: {
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
