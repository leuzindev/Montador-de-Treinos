import { Router } from 'express';
import  UserController  from '../../controllers/user.controller';

const router = Router();

router
    .get('/users', UserController.AllUsers)
    .get('/user/:id', UserController.UserbyId)
    .post('/users', UserController.CreateUser)
    .put('/user/:id', UserController.UpdateUser)
    .delete('/user/:id', UserController.DeleteUser)

export { router as UserRouter };
