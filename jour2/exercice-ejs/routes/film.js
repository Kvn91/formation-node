import express from 'express';
import fs from 'fs';
import { stringify } from 'querystring';

const filmRouter = express.Router();

filmRouter.get('/', (req, res) => {
    let films = JSON.parse(fs.readFileSync('films.json'));
    res.render('films', {
        films: films
    });
});

filmRouter.get('/:name', (req, res) => {
    let name = req.params.name;
    res.render('film');
});

filmRouter.post('/add', (req, res) => {
    let films = JSON.parse(fs.readFileSync('films.json'));
    films.push(req.body);
    fs.writeFileSync('films.json', JSON.stringify(films));
    res.redirect('/film');
});

export default filmRouter;