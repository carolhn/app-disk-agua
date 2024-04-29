import { Router } from 'express';
import { ProductsController } from 'src/api/controllers/products';
import { validateCreate, validateIdParams, validateUpdate } from 'src/api/middleware/products';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.listAllProducts);

productsRouter.get('/:id',validateIdParams(), productsController.productById);

productsRouter.post('/', validateCreate(), productsController.createProduct);

productsRouter.put('/:id',validateUpdate(), productsController.updateProduct);

productsRouter.delete('/:id', validateIdParams(), productsController.deleteProduct);

export default productsRouter;
