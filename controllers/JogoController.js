const games = require('../mocks/games.json');
const jogadores = require('../mocks/jogadores.json');
const bares = require('../mocks/bares.json');
const oponente = require('../mocks/oponente.json');

exports.list_all_games = (req, res, next) => {
    res.json(games);
};

exports.find_game = (req, res, next) => {
    res.json(oponente);
};