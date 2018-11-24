import express from 'express';
import bodyParser from 'body-parser';
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});