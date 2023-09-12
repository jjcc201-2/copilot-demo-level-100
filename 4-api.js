const express = require('express');
const router = express.Router();
const uuid = require('uuid');
var games = require('./models/game');

// @route GET api/games/:id
// @desc Get single game
// @access Public
router.get('/:id', (req, res) => {
    // check if the game exists
    const found = games.some(game => game.id === parseInt(req.params.id));

    if (found) {
        res.json(games.filter(game => game.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `Game ${req.params.id} not found`})
    }
}); 


// Create routes for all CRUD operations including create, read, update and delete (ctrl-enter to synthesise)

module.exports = router;