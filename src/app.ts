import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Sequelize } from 'sequelize-typescript';
import * as Umzug from 'umzug';
import * as sequelizeConfig from './Config/sequelize.dev.json';
import Communication from './Services/Communication';
import Exception from './Infrastructure/Exception.js';
import Example from './Models/Example.js';

// Creating models
const db = new Sequelize(<any>sequelizeConfig);
db.addModels([
  Example
]);

// Migrations
const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: db,
  },
  migrations: {
    params: [
      db.getQueryInterface(),
      Sequelize,
    ],
    path: './dist/Migrations',
  },
});

// Setting Database Context for the application
Communication.setDB(db);

// Executing migrations
umzug.up()
  .then((migrations: any) => {
    migrations.forEach((m) => console.log('Migration executed :', m.file));
  });

// Starting web server
const app = express();

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/', require('./Routes/Example'))

  // Errors handler
  .use((err, req, res, next) => {
    if(err instanceof Exception) {
      res.status(err.StatusCode()).json(err);
    }
    next(err, req, res, next);
  })

  .listen(8080);
