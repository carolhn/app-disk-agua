import sequelize, { Model } from 'sequelize'
import db from '.'

class Sales extends Model {
  declare id: number
  declare dateSales: Date
  declare quantitySales: Number
  declare unitPriceSales: Number
  declare totalPriceSales: Number
  declare productId: Number
  declare customerId: Number
}

Sales.init({
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dateSales: {
      type: sequelize.DATE,
      allowNull: false,
    },
    quantitySales: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    unitPriceSales: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    totalPriceSales: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    productId: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    customerId: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'sales',
    sequelize: db,
    underscored: true,
  }
)

export default Sales;
