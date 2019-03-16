import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Sequelize } from 'sequelize-typescript';
import * as Umzug from 'umzug';
import * as sequelizeConfig from './Config/sequelize.dev.json';
import Communication from './Services/Communication';
import ExceptionHandler from './Infrastructure/ExceptionHandler';
import Example from './Models/Example.js';
import AuthenticationMiddleware from './Middlewares/Authentication';

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

  // Route for authentication
  .use('/login', require('./Routes/Authentication'))
  
  // Can't go further without being authenticated
  .use(AuthenticationMiddleware)

  // Routes
  .use('/', require('./Routes/Example'))

  // Exceptions handler
  .use(ExceptionHandler)

  .listen(8080);
