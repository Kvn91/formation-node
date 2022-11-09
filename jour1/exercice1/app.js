const sum = require('./operations/sum.js');
const multiply = require('./operations/multiplication.js');
const divide = require('./operations/division.js');
const substract = require('./operations/substraction.js');

const moment = require('moment');
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.write(sum(process.argv[2], process.argv[3]) + '\n');
    res.write(multiply(process.argv[2], process.argv[3]) + '\n');
    res.write(divide(process.argv[2], process.argv[3]) + '\n');
    res.write(substract(process.argv[2], process.argv[3]) + '\n');

    res.write('Today is: ' + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});