import sequelize, { Model } from 'sequelize'
import db from '.'

class PurchaseProducts extends Model {
  declare id: number
  declare purchaseId: number
  declare productId: number
  declare quantity: number
  declare unitPrice: number
}

PurchaseProducts.init({
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    purchaseId: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    productId: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    unitPrice: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'purchase_products',
    sequelize: db,
    underscored: true,
  }
)

export default PurchaseProducts;
