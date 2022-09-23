import {Router} from 'express';

import {gamesControllers} from '../controllers/gamesController';

// Enrrutador
class GamesRoutes {

    // Instanciamos el enrrutador
    public router: Router = Router();

    constructor() {
        this.config();
    }

    // Las rutas que creemos en config de almacenar en router
    config():void {
        this.router.get('/', gamesControllers.list);
        this.router.get('/:id', gamesControllers.getOne);
        this.router.post('/', gamesControllers.create);
        this.router.delete('/:id', gamesControllers.delete);
        this.router.put('/:id', gamesControllers.update);
    }

}

// Al instanciar la clase, poblamos el router con dichas rutas de config
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;