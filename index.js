require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/dbConnect');

dbConnect();
const app = express();

const PORT = process.env.PORT || 4000;

app.use('/', (req, res) => {
  res.send('Hello from server side');
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
