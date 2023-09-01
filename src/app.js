import express from 'express';
import routes from './routes';
import routines from './app/routines';

class App {
  constructor() {
    this.server = express();
    //this.server.use('/static/files', express.static('var/tmp'));

    this.routes();
    routines();
  }

  
  middlewares() {
    //tamanho configurado no express e no nginx
    this.server.use(express.json({limit: '100mb'}));
    
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
