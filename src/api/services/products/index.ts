import { productType } from 'src/api/types/products';
import Products from 'src/database/models/products';

export class ProductService {

  async listAllProducts(): Promise<Products[]> {
    return await Products.findAll();
  }

  async findByName(name: string): Promise<Products | null> {
    return await Products.findOne({ where: { name } });
  }

  async createProduct({ name, description, image }: productType): Promise<Products> {
    const productsExists = await this.findByName(name);
    if (productsExists) {
      throw new Error('Product already exists');
    }

    return await Products.create({ name, description, image });
  }

  async productById(id: number): Promise<Products> {
    const product = await Products.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }

  async updateProduct({ id, name, description, image}: productType): Promise<number | Products> {
    const productId = await this.productById(Number(id));

    const productExists = await this.findByName(name);
    if (productExists && productExists.name !== name) {
      throw new Error('Product already exists');
    }

    return await productId!.update({ name, description, image });
  }

  async deleteProduct(id: number): Promise<void> {
    const productId = await this.productById(Number(id));
    await productId?.destroy();
  }
}
