require('dotenv').config();
const express = require('express');
const dbConnect = require('./config/dbConnect');
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

dbConnect();
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

app.use('/api/user', authRouter);
app.use('/api/product', productRouter);

//error
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
