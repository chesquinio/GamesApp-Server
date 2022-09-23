import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes'

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config():void {
        //Puerto del servidor
        this.app.set('port', process.env.PORT || 3000);
        //Nos permite ver el tipo de peticion y el codigo en consola
        this.app.use(morgan('dev'));
        //Nos permite enviar y recibir datos
        this.app.use(cors());
        //Nos permite enviar y recivir json
        this.app.use(express.json());

        this.app.use(express.urlencoded({extended:false}));
    }

    routes():void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
    }

    start():void {
        this.app.listen(this.app.get('port'), ()=> {
            console.log('Server on port ' + this.app.get('port'));
        })
    }
}

const server = new Server();
server.start()