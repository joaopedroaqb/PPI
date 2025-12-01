function notFoundHandler(req, res, next) {
  res.status(404).json({
    status: 404,
    error: 'NotFound',
    message: 'Rota não encontrada.',
    path: req.originalUrl,
    timestamp: new Date().toISOString()
  });
}

module.exports = notFoundHandler;
