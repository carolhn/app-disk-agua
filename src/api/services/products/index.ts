import { ProductType } from 'src/api/types/products';
import Products from 'src/database/models/products';

export class ProductService {

  async listAllProducts(): Promise<Products[]> {
    return await Products.findAll();
  }

  async findByName(name: string): Promise<Products | null> {
    return await Products.findOne({ where: { name } });
  }

  async createProduct({ name, description, image }: ProductType): Promise<Products> {
    const productsExists = await this.findByName(name);
    if (productsExists) {
      throw new Error('Product already exists');
    }

    if (!name || !description || !image) {
      throw new Error('All fields are required');
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

  async updateProduct({ id, name, description, image}: ProductType): Promise<number | Products> {
    const productExists = await this.findByName(name);
    if (productExists && productExists.id !== id) {
      throw new Error('Product already exists');
    }

    const productId = await this.productById(Number(id));
    if (!productId) {
      throw new Error('Product already exists');
    }

    return await productId!.update({ name, description, image });
  }

  async deleteProduct(id: number): Promise<void> {
    const productId = await this.productById(Number(id));
    if (!productId) {
      throw new Error('Product not found');
    }

    await productId?.destroy();
  }
}
