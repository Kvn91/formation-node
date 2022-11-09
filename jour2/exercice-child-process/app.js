const childProcess = require('child_process')
const http = require('http')
const port = 3000;
const host = '127.0.0.1';
const myChildProcess = childProcess.fork(__dirname +'/childScript.js');
myChildProcess.on('message', (childMessage) => {
  console.log(childMessage);
});

const requestListener = function (req, res) {
  if (req.url === '/begin') {
    myChildProcess.send('begin');
  } else if (req.url === '/count') {
    console.log('call compteur');
    myChildProcess.send('compteur');
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});