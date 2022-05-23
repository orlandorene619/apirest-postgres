const http = require('http');
const app = require('../app');
const server = http.createServer(app);


const port = parseInt(process.env.port) || 5432;
app.set('port', port);
server.listen(port);
