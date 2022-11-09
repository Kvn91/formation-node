import express from 'express';

const filmRouter = express.Router();

filmRouter.get('/:id', (req, res) => {
    let id = req.params.id;
    res.send('Recherche sur le film ' + id);
});

export default filmRouter;