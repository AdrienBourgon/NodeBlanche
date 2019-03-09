import Sequelize from 'sequelize';

import { DBInterface } from 'Infrastructure/Typings/DBInterface';
import { ExampleFactory } from './Example';

export const createModels = (sequelizeConfig: any): DBInterface => {
  const sequelize = new Sequelize(sequelizeConfig);

  const db: DBInterface = {
    sequelize,
    Example: ExampleFactory(sequelize),
  };

  return db;
};
