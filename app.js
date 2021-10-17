import dotenv from 'dotenv';

dotenv.config();

import './src/database/index.js';

import express from 'express';

import homeRoutes from './src/routes/home.js';
import userRoutes from './src/routes/user.js';
import tokenRoutes from './src/routes/token.js';
import alunoRoutes from './src/routes/aluno.js';
import fotoRoutes from './src/routes/foto.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
