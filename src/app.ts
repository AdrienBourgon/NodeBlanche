import * as bodyParser from 'body-parser';
import * as express from 'express';
import Sequelize from 'sequelize';
import * as Umzug from 'umzug';
import * as sequelizeConfig from './Config/sequelize.dev.json';
import { createModels } from './Models';
import Communication from './Services/Communication';
// Creating models
const db = createModels(sequelizeConfig);

// Migrations
const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: db.sequelize,
  },
  migrations: {
    params: [
      db.sequelize.getQueryInterface(),
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

  .listen(8080);
