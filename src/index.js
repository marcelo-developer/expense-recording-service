import express from 'express';
import sequelize from './config/database.js';
import gastosRoutes from './routes/gastos.js';
import Gasto from './models/gasto.js';
import User from './models/user.js';

const app = express();
app.use(express.json());

app.use('/api', gastosRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('API rodando em http://localhost:3000'));
});
