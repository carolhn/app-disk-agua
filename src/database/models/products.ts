import sequelize, { Model } from 'sequelize'
import db from '.'

class Products extends Model {
  declare id: number
  declare name: string
  declare description: string
  declare image: string
}

Products.init(
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
    description: {
      type: sequelize.STRING(128),
      allowNull: false,
    },
    image: {
      type: sequelize.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'products',
    sequelize: db,
    timestamps: false,
  }
)

export default Products;
