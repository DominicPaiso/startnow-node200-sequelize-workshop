const express = require('express');
const router = express.Router();
const db = require("../db/models/index");

router.get("/", (req, res) => {
  db.Author
  .findAll()
  .then(author => {
      res.status(200).json(author)
  });
});

router.get('/:id', (req, res) => {
    db.Author
    .findById(req.params.id)
    .then(author => {
        author ? res.status(200).json(author) : res.status(404).send('404 Not Found')
    });
});

router.get('/:id/blogs', (req, res) => {
    db.Blog
    .findAll({where: {authorId: req.params.id}})
    .then(blog => {
        res.status(200).json(blog)
    });
});

router.post('/', (req, res) => {
    db.Author
    .create(req.body)
    .then(author => {
        res.status(201).json(author)
    });
});

router.put('/:id', (req, res) => {
    db.Author
    .update(req.body, {where: {id: req.params.id}})
    .then(author => {
        res.status(204).json(author)
    });
});

router.delete('/:id', (req, res) => {
    db.Author
    .destroy({where: {id: req.params.id}})
    .then(author => {
        res.status(200).json(author)
    });
});

module.exports = router;