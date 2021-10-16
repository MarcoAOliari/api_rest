const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'John Doe',
        email: 'johndoe@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Mary Land',
        email: 'maryland@gmail.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Kerk Ben',
        email: 'kerkben@gmail.com',
        password_hash: await bcryptjs.hash('15975835', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: async () => {

  },
};
