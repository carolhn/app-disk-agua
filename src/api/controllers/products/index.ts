import { Request, Response } from 'express';
import { ProductService } from 'src/api/services/products';

export class ProductsController {

  async listAllProducts(req: Request, res: Response): Promise<Response> {
    try {
      const products = new ProductService();
      const allProducts = await products.listAllProducts();
      return res.status(200).json(allProducts);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async findByName(req: Request, res: Response): Promise<Response> {
    const { name } = req.params;
    try {
      const products = new ProductService();
      const productName = await products.findByName(name);
      return res.status(200).json(productName);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async createProduct(req: Request, res: Response): Promise<Response> {
    const { name, description, image } = req.body;

    try {
      const products = new ProductService();
      const createProduct = await products.createProduct({ name, description, image });
      return res.status(201).json(createProduct);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  async productById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const products = new ProductService();
      const productId = await products.productById(Number(id));
      return res.status(200).json(productId);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
