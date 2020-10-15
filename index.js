// process.env.NODE_ENV = process.argv.includes('--development')
//     ? 'development'
//     : 'production';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.text({ type: '*/*' }));

mongoose.connect('mongodb+srv://settle:1louisloo@cluster0.sbaed.azure.mongodb.net/Cluster0?retryWrites=true&w=majority', { //mongodb+srv://settle:1louisloo@cluster0.av895.azure.mongodb.net/Cluster0?retryWrites=true&w=majority
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB database.');
}).catch((err) => {
    console.log(`Unable to connect to the MongoDB database: ${err}`)
});

const init = () => {
    const endpoints = require('./endpoints');

    for (const endpoint of endpoints) {
        endpoint(app, config);
    }
};

init();

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${config.server.port}, PID: ${process.pid}`)
});
