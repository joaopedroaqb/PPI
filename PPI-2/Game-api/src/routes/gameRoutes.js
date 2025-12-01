const express = require('express');
const GameController = require('../controllers/gameController');

const router = express.Router();

router.post('/', GameController.createGame);
router.get('/', GameController.getAllGames);
router.get('/:id', GameController.getGameById);
router.put('/:id', GameController.updateGame);
router.patch('/:id', GameController.patchGame);
router.delete('/:id', GameController.deleteGame);

module.exports = router;
