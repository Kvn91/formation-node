import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.get('/toast', (req, res) => {
    res.send('Hello toast!');
});

const server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`listening on http://${host}:${port}`);
})