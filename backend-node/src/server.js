const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    sistema: 'Monitoramento APS'
  });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});