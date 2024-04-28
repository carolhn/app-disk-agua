import { userType } from 'src/api/types/products';
import Products from 'src/database/models/products';

export class ProductService {

  async findByName(name: string) {
    return await Products.findOne({ where: { name } });
  }

  async createProduct({ name, description, image }: userType) {
    const productsExists = await this.findByName(name);
    if (productsExists) {
      throw new Error('Product already exists');
    }

    return await Products.create({ name, description, image });
  }
}
