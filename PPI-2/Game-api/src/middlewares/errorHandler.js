const mongoose = require('mongoose');

function errorHandler(err, req, res, next) {
  console.error('Erro capturado pelo errorHandler:', err);

  // Erros de validação do Mongoose
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      status: 400,
      error: 'ValidationError',
      message: err.message,
      details: err.errors
    });
  }

  // Se o erro já tiver status, usa ele
  const status = err.status || 500;

  return res.status(status).json({
    status,
    error: status === 500 ? 'InternalServerError' : 'Error',
    message: err.message || 'Erro interno do servidor',
    path: req.originalUrl,
    timestamp: new Date().toISOString()
  });
}

module.exports = errorHandler;
