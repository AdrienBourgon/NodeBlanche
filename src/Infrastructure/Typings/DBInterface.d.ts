import * as Sequelize from "sequelize";
import { ExampleInstance, ExampleAttributes } from "../../Models/Example";

export interface DBInterface {
  sequelize: Sequelize.Sequelize;
  Example: Sequelize.Model<ExampleInstance, ExampleAttributes>;
}