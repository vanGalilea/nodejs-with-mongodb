import express from 'express';
import bodyParser from 'body-parser';
import product from './routes/product.route';
import mongoose from 'mongoose';

const dev_db_url = 'mongodb://vangalilea:mLab2018@ds111279.mlab.com:11279/products';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

const port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
});