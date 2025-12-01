require('dotenv').config();
const app = require('./app');
const connectDatabase = require('./config/database');

const PORT = process.env.PORT || 3000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server rodando em http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('❌ Erro ao conectar no banco de dados:', error);
    process.exit(1);
  });
