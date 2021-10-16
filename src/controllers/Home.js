import Aluno from '../models/Aluno.js';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Marco',
      email: 'marcoaoliari@gmail.com',
      idade: 20,
      peso: 69,
      altura: 1.70,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
