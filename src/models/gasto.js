import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.js';

const Gasto = sequelize.define('Gasto', {
  nome: DataTypes.STRING,
  valor: DataTypes.FLOAT,
  data: DataTypes.DATEONLY
});

User.hasMany(Gasto);
Gasto.belongsTo(User);

export default Gasto;
