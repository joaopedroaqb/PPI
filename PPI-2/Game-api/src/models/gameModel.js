const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, 'O campo "titulo" é obrigatório.'],
      trim: true
    },
    genero: {
      type: String,
      required: [true, 'O campo "genero" é obrigatório.'],
      trim: true
    },
    plataforma: {
      type: String,
      required: [true, 'O campo "plataforma" é obrigatório.'],
      trim: true
    },
    lancamento: {
      type: Number,
      required: [true, 'O campo "lancamento" é obrigatório.'],
      min: [1970, 'Ano de lançamento muito antigo.'],
      max: [3000, 'Ano de lançamento inválido.']
    }
  },
  {
    timestamps: true, // createdAt, updatedAt
    collection: 'games'
  }
);

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
