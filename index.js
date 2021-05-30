const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/login', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  try {
    res.send({ mensagem: 'Login Funcionando' });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.listen(3333, async () => {
  console.log('Server em execução e arquivo criado!');
});
