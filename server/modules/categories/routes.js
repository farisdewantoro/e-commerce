import { Router } from 'express';
import * as CategoryController from './controller';

const routes = new Router();

routes.post('/category/create',CategoryController.createCategory);

export default routes;