import bodyParser from 'body-parser';
import express from 'express';
import { filmRouter } from './routes/index.js';

const app = express();


app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/film', filmRouter);

const server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`listening on http://${host}:${port}`);
})
