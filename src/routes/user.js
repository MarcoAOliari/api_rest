import { Router } from 'express';
import userController from '../controllers/User';

const router = new Router();

router.get('/', userController.index);
router.post('/', userController.store);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index -> listar
store/create -> criar
delete -> apagar
show -> mostra um usuário
update -> atualiza um usuário
*/
