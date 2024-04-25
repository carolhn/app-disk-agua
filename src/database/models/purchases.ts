import sequelize, { Model } from 'sequelize'
import db from '.'
import Products from './products'

class Purchases extends Model {
  declare id: Number
  declare receipt: String
  declare datePurchase: Date
  declare quantity: Number
  declare unitPrice: Number
  declare totalPrice: Number
  declare productId: Number
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
    datePurchase: {
      type: sequelize.DATE,
      allowNull: false,
    },
    quantity: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    unitPrice: {
      type: sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    totalPrice: {
      type: sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    productId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  },
  {
    tableName: 'purchases',
    sequelize: db,
    timestamps: false,
    underscored: true,
  }
)

Purchases.belongsTo(Products, { foreignKey: 'product_id' as 'product' });

export default Purchases;
