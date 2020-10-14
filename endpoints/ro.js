const sendWebhook = require('../util/sendWebhook');

module.exports = (app, config) =>
    app.post('/ro', async (req, res) => {

        sendWebhook({
            title: 'yay'
        });

        res.send({ message: 'done i think' })
    });