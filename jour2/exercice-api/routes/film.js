import express from 'express';
import fs from 'fs';

const filmRouter = express.Router();

filmRouter.get('/', (req, res) => {
    res.json({films: fs.readFileSync('films.json', 'utf-8')});
});

filmRouter.post('/add', (req, res) => {
    console.log(req.body);
    res.end();
    // const { title, note } = req.body;
    // let errors = [];

    // if (!title) errors.push('Title is required');
    // if (!note) errors.push('Note is required');

    // if (errors.length > 0) res.status(400).json({errors: errors});

    // let films = json.PARSE(fs.readFileSync('films.json', 'utf-8'));
    // films.push({title: title, note: note});

    // fs.writeFileSync('films.json',JSON.stringify(films));

    // res.json({films: films});
});

export default filmRouter;