const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config')
const { registerApiController } = require('./controllers/api');

const server = express();

server.use(bodyParser.json());
server.use(express.static(__dirname + '/../../public'));
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/index.html'));
});

registerApiController(server);

const port = config.serverPort;
server.listen(port, () => {
    console.log(`Server started on ${port}.`);
});

module.exports = { server };
