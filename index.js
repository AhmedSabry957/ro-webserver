process.env.NODE_ENV = process.argv.includes('--development')
    ? 'development'
    : 'production';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.text({ type: '*/*' }));

mongoose.connect('nopers', {
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
