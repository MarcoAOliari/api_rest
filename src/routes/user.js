import { Router } from 'express';
import userController from '../controllers/User';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
index -> listar
store/create -> criar
delete -> apagar
show -> mostra um usuário
update -> atualiza um usuário
*/
