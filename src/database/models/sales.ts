import sequelize, { Model } from 'sequelize'
import db from '.'
import Customers from './customers'

class Sales extends Model {
  declare id: Number
  declare customerId: Number
  declare dateSales: Date
  declare totalPriceSales: Number
  declare quantity: Number

}

Sales.init({
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    customerId: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    dateSales: {
      type: sequelize.DATE,
      allowNull: false,
    },
    totalPriceSales: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: sequelize.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: 'sales',
    sequelize: db,
    underscored: true,
    timestamps: false
  }
)

Sales.belongsTo(Customers, { foreignKey: 'customerId' as 'customer' })

export default Sales;
