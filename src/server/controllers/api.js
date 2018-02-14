const propertiesSerivce = require('../services/propertiesSerivce');

function registerApiController(server) {
    server.get('/api/properties', async (req, res) => {
        try {
            const properties = await propertiesSerivce.getProperties();
            res.setHeader('Content-Type', 'application/json');
            res.send(properties);
        } catch (err) {
            res.status(500);
            res.send({
                message: "Couldn't get properties."
            })
        }
    });

    server.post('/api/properties', async (req, res) => {
        try {
            await propertiesSerivce.addProperty(req.body);
            res.status(201).end();
        } catch (err) {
            res.status(500);
            res.send({
                message: "Couldn't add property."
            });
        }
    });
}

module.exports = { registerApiController };
