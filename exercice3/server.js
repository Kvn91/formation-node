const http = require('node:http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    let contentType = 'text/html charset=utf8';
    let mimeType = path.extname(filePath);

    switch (mimeType) {
        case '.jpg' : contentType = 'image/jpeg';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.end(data);
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});