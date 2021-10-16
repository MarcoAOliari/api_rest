import { Router } from 'express';
import userController from '../controllers/User';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index);
// router.get('/:id', userController.show);

// Existem
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> listar
store/create -> criar
delete -> apagar
show -> mostra um usuário
update -> atualiza um usuário
*/
