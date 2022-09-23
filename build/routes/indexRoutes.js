"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
// Enrrutador
class IndexRoutes {
    constructor() {
        // Instanciamos el enrrutador
        this.router = (0, express_1.Router)();
        this.config();
    }
    // Las rutas que creemos en config de almacenar en router
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
// Al instanciar la clase, poblamos el router con dichas rutas de config
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
