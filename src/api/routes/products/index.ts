import { Router } from 'express';
import { ProductsController } from 'src/api/controllers/products';
import { validateCreate, validateDelete, validateGetId, validateUpdate } from 'src/api/middleware/products';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.listAllProducts);

productsRouter.get('/:id',validateGetId(), productsController.productById);

productsRouter.post('/', validateCreate(), productsController.createProduct);

productsRouter.put('/:id',validateUpdate(), productsController.updateProduct);

productsRouter.delete('/:id', validateDelete(), productsController.deleteProduct);

export default productsRouter;
