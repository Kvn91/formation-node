import express from 'express';
import { filmRouter } from './routes/index.js';

const app = express();
app.use('/api/film', filmRouter);

const server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`listening on http://${host}:${port}`);
})
