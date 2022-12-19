const express = require('express');
const app = express();
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const dotenv = require('dotenv').config();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/customers', require('./routes/customerRoutes'));
app.use('/api/orders', require('./routes/billRoutes'));
app.use('/auth', require('./routes/userRoutes'));


app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
