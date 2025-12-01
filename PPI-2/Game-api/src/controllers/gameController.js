const mongoose = require('mongoose');
const Game = require('../models/gameModel');

class GameController {
  // POST /api/games
  static async createGame(req, res, next) {
    try {
      const { titulo, genero, plataforma, lancamento } = req.body;

      if (!titulo || !genero || !plataforma || lancamento === undefined) {
        const error = new Error('Campos obrigatórios: titulo, genero, plataforma, lancamento.');
        error.status = 400;
        throw error;
      }

      const game = await Game.create({ titulo, genero, plataforma, lancamento });
      return res.status(201).json(game);
    } catch (error) {
      next(error);
    }
  }

  // GET /api/games
  static async getAllGames(req, res, next) {
    try {
      const games = await Game.find();
      return res.status(200).json(games);
    } catch (error) {
      next(error);
    }
  }

  // GET /api/games/:id
  static async getGameById(req, res, next) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('ID inválido.');
        error.status = 400;
        throw error;
      }

      const game = await Game.findById(id);

      if (!game) {
        const error = new Error('Game não encontrado.');
        error.status = 404;
        throw error;
      }

      return res.status(200).json(game);
    } catch (error) {
      next(error);
    }
  }

  // PUT /api/games/:id
  static async updateGame(req, res, next) {
    try {
      const { id } = req.params;
      const { titulo, genero, plataforma, lancamento } = req.body;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('ID inválido.');
        error.status = 400;
        throw error;
      }

      if (!titulo || !genero || !plataforma || lancamento === undefined) {
        const error = new Error('Campos obrigatórios para atualização: titulo, genero, plataforma, lancamento.');
        error.status = 400;
        throw error;
      }

      const updatedGame = await Game.findByIdAndUpdate(
        id,
        { titulo, genero, plataforma, lancamento },
        { new: true, runValidators: true }
      );

      if (!updatedGame) {
        const error = new Error('Game não encontrado.');
        error.status = 404;
        throw error;
      }

      return res.status(200).json(updatedGame);
    } catch (error) {
      next(error);
    }
  }

  // PATCH /api/games/:id
  static async patchGame(req, res, next) {
    try {
      const { id } = req.params;
      const body = req.body;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('ID inválido.');
        error.status = 400;
        throw error;
      }

      const patchedGame = await Game.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true
      });

      if (!patchedGame) {
        const error = new Error('Game não encontrado.');
        error.status = 404;
        throw error;
      }

      return res.status(200).json(patchedGame);
    } catch (error) {
      next(error);
    }
  }

  // DELETE /api/games/:id
  static async deleteGame(req, res, next) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('ID inválido.');
        error.status = 400;
        throw error;
      }

      const deletedGame = await Game.findByIdAndDelete(id);

      if (!deletedGame) {
        const error = new Error('Game não encontrado.');
        error.status = 404;
        throw error;
      }

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GameController;
