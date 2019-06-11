const express = require("express");
const controller = require("../controllers/JogoController.js");
const router = express.Router();

router.get("/listarJogos", controller.list_all_games);
router.get("/encontrarJogo", controller.find_game);

module.exports = router;
