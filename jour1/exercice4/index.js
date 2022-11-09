import App from './App.js';
import fs from 'fs';

const app = App.start(3000);

app.on('home', (res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.end(data);
    })
});
app.on('404', (res) => {
    fs.readFile('404.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.end(data);
    })
});