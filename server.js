const express = require('express');
const app = express();
app.use(express.json());

const users = [{ id: 1, name: 'Gatita' }];

// Endpoint GET
app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

// Endpoint POST
app.post('/api/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000, () => console.log('API escuchando en http://localhost:3000'));