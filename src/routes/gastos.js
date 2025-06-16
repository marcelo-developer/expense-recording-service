import express from 'express';
import User from '../models/user.js';
import Gasto from '../models/gasto.js';

const router = express.Router();

router.post('/lancar', async (req, res) => {
  const { email, nome, gastos } = req.body;

  if (!email || !gastos) {
    return res.status(400).json({ error: 'Email e gastos são obrigatórios' });
  }

  const user = await User.findOrCreate({
    where: { email },
    defaults: { nome }
  }).then(([u]) => u);

  const entries = gastos.split(';').filter(Boolean).map(str => {
    const [nome, valor] = str.split(':');
    return {
      nome,
      valor: parseFloat(valor),
      data: new Date(),
      UserId: user.id
    };
  });

  const result = await Gasto.bulkCreate(entries);
  res.json({ success: true, registros: result.length });
});

export default router;
