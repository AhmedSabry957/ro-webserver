const sendWebhook = require('../util/sendWebhook');

module.exports = (app, config) =>
    app.post('/dblwebhook', async (req, res) => {
        if (!req.headers.authorization || req.headers.authorization !== config.server.secret) {
            return res.status(401).send({ status: 401 });
        }

        const body = JSON.parse(req.body);

        if (body.type !== 'upvote') {
            res.status(400).send({ status: 400, message: `Unknown type: ${body.type}` });
        }

        if (body.isWeekend) {
            sendWebhook({
                title: `New Vote [${body.user}]`,
                color: 0x0f99f5,
            });
        } else {
            sendWebhook({
                title: `New Vote [${body.user}]`,
                color: 0x0f99f5,
            });
        }

        res.status(200).send({ status: 200 });
    });