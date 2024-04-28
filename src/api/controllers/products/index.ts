import { Request, Response } from 'express';
import { ProductService } from 'src/api/services/products';

export class ProductsController {

  async listAllProducts(req: Request, res: Response) {
    try {
      const products = new ProductService();
      const allProducts = await products.listAllProducts();
      return res.status(200).json(allProducts);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
