require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/dbConnect');
const authRouter = require('./routes/authRoute');
const bodyParser = require('body-parser');

dbConnect();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4000;

app.use('/api/user', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
