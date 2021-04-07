require('dotenv').config();
const express = require('express');
const sequeliize = request('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const PORT = process.env.PORT | 5000;
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
    try {
        await sequeliize.authenticate();
        await sequeliize.sync();
        app.listen(PORT, () => console.log(`Server has been started ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}


 start();