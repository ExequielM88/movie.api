const { getAll, create, getOne, remove, update, setGenres, setActors, setDirectors } = require('../controllers/movie.controller');
const express = require('express');

const routerMovie = express.Router();

routerMovie.route('/')
    .get(getAll)
    .post(create);

routerMovie.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

    //  /movie/:id/genres
routerMovie.route('/:id/genres')
    .post(setGenres) 

    //  /movie/:id/actors

routerMovie.route('/:id/actors')
    .post(setActors)

    //  /movie/:id/directors

routerMovie.route('/:id/directors')
    .post(setDirectors)   


module.exports = routerMovie;