"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = require("../controllers/gamesController");
// Enrrutador
class GamesRoutes {
    constructor() {
        // Instanciamos el enrrutador
        this.router = (0, express_1.Router)();
        this.config();
    }
    // Las rutas que creemos en config de almacenar en router
    config() {
        this.router.get('/', gamesController_1.gamesControllers.list);
        this.router.get('/:id', gamesController_1.gamesControllers.getOne);
        this.router.post('/', gamesController_1.gamesControllers.create);
        this.router.delete('/:id', gamesController_1.gamesControllers.delete);
        this.router.put('/:id', gamesController_1.gamesControllers.update);
    }
}
// Al instanciar la clase, poblamos el router con dichas rutas de config
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
