const express = require('express');
const router = express.Router();
const db = require('../db/models');

router.get('/', (req, res) => {
    db.Blog
    .findAll()
    .then(blog => {
        res.status(200).json(blog)
    });
});

router.get('/featured', (req, res) => {
    db.Blog
    .findAll({where: {featured: true}})
    .then(blogs => {
        res.status(200).json(blogs)
    });
});

router.get('/:id', (req, res) => {
    db.Blog
    .findById(req.params.id)
    .then(blog => {
        blog ? res.status(200).json(blog) : res.status(404).send('404 Not Found')
    });
});



router.post('/', (req, res) => {
    req.body.authorId = req.query.authorId;
    db.Blog
    .create(req.body)
    .then(blog => {
        res.status(201).json(blog)
    });
});

router.put('/:id', (req, res) => {
    db.Blog
    .update(req.body, {where: {id: req.params.id}})
    .then(blog => {
        res.status(204).json(blog)
    });
});

router.delete('/:id', (req, res) => {
    db.Blog
    .destroy({where: {id: req.params.id}})
    .then(blog => {
        res.status(200).json(blog)
    });
});

module.exports = router;