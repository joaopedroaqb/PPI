const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const gameRoutes = require('./routes/gameRoutes');
const errorHandler = require('./middlewares/errorHandler');
const requestLogger = require('./middlewares/requestLogger');
const notFoundHandler = require('./middlewares/notFoundHandler');

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Logger com morgan (log simples) + logger customizado (bônus)
app.use(morgan('dev'));
app.use(requestLogger);

// Rota simples para teste
app.get('/', (req, res) => {
  res.json({ message: 'API de Games - OK' });
});

// Rotas de games
app.use('/api/games', gameRoutes);

// 404 para rotas inexistentes
app.use(notFoundHandler);

// Middleware de erro centralizado (sempre por último)
app.use(errorHandler);

module.exports = app;
