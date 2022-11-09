import http from 'http';
import EventEmitter from 'events';

class App {
    start(port) {
        let emitter = new EventEmitter();
        http.createServer((req, res) => {
            switch (req.url) {
                case '/':
                    res.statusCode = 200;
                    emitter.emit('home', res);
                    break;
                default:
                    res.statusCode = 404;
                    emitter.emit('404', res);
            }
        }).listen(port);

        return emitter;
    }
}

export default new App();