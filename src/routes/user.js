import { Router } from 'express';
import userController from '../controllers/User';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', userController.index);
router.post('/', userController.store);
router.get('/:id', userController.show);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index -> listar
store/create -> criar
delete -> apagar
show -> mostra um usuário
update -> atualiza um usuário
*/
