import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
console.log("Password:", process.env.DB_PASSWORD)
console.log("dbname:", process.env.DB_NAME)
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    schema: process.env.DB_SCHEMA,
    logging: false, 
  }
);
