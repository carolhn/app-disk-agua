import { Router } from 'express';
import { ProductsController } from 'src/api/controllers/products';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.listAllProducts);
productsRouter.get('/:id', productsController.productById);

productsRouter.post('/', productsController.createProduct);
productsRouter.put('/:id', productsController.updateProduct);
productsRouter.delete('/:id', productsController.deleteProduct);

export default productsRouter;
