import { Sequelize } from 'sequelize-typescript';
import { Product } from './src/models/Product';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'dbInnovation.db',
  models: [Product],
});

export default sequelize;
