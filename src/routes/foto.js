import { Router } from 'express';
import multer from 'multer';

import fotoController from '../controllers/Foto.js';
import multerConfig from '../config/multer.js';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), fotoController.store);

export default router;
