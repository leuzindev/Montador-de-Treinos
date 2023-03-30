import { Router } from 'express';
import CategoryController from '../../controllers/category.controller';

const router = Router();

router
    .get('/categories', CategoryController.AllCategories)
    .get('/category/:id', CategoryController.CategoryById)
    .post('/categories', CategoryController.CreateCategory)
    .put('/category/:id', CategoryController.UpdateCategory)
    .delete('/category/:id', CategoryController.DeleteCategory)

export { router as CategoryRouter };
