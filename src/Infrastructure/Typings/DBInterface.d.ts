import * as Sequelize from "sequelize";

export interface DBInterface {
  sequelize: Sequelize.Sequelize;
  Example: Sequelize.Model;
}