import * as Sequelize from 'sequelize';

export interface ExampleAttributes {
  id?: string;
  text: string;
  something?: string;
}

export interface ExampleInstance extends Sequelize.Instance<ExampleAttributes> {

};

export function ExampleFactory(sequelize: Sequelize.Sequelize): Sequelize.Model<ExampleInstance, ExampleAttributes> {
  return sequelize.define<ExampleInstance, ExampleAttributes>('Example', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    something: Sequelize.STRING,
  });
}
