import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config(); // carrega o .env


console.log('HOST ENCONTRADO:' +  process.env.MYSQL_HOST);
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST, // <- Aqui ele vai pegar o correto
    dialect: 'mysql',
    port: 3306
  }
);

export default sequelize;
