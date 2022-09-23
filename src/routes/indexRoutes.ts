import {Router} from 'express';
import {indexController} from '../controllers/indexController'

// Enrrutador
class IndexRoutes {

    // Instanciamos el enrrutador
    public router: Router = Router();

    constructor() {
        this.config();
    }

    // Las rutas que creemos en config de almacenar en router
    config():void {
        this.router.get('/', indexController.index)
    }

}

// Al instanciar la clase, poblamos el router con dichas rutas de config
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;