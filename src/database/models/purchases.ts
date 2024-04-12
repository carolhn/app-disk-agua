import sequelize, { Model } from 'sequelize'
import db from '.'

class Purchases extends Model {
  declare id: number
  declare receipt: string
  declare date: Date
  declare totalPrice: number
}

Purchases.init({
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    receipt: {
      type: sequelize.STRING(128),
      allowNull: false,
    },
    date: {
      type: sequelize.DATE,
      allowNull: false,
    },
    totalPrice: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'purchases',
    sequelize: db,
    timestamps: false,
    underscored: true,
  }
)

export default Purchases;
