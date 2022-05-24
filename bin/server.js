require("dotenv").config();
const http = require('http');
const app = require('../app');
const server = http.createServer(app);

/*
const PORT = parseInt(process.env.PORT) || 3000;
app.set('PORT', PORT);
server.listen(PORT);*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
