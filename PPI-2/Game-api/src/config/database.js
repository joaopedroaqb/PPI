const mongoose = require('mongoose');

async function connectDatabase() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error('A variável de ambiente MONGO_URI não foi definida.');
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('✅ Conectado ao MongoDB Atlas com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB Atlas:', error.message);
    throw error;
  }
}

module.exports = connectDatabase;
