// server.js
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send(res.data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});