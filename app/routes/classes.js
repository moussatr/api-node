const express = require('express');
const { v4: uuidv4 } = require('uuid');

let router = express.Router();

let classes = [];

router.post('/', (request, response) => {
    const {name} = request.body;

    let classe = {
        id: uuidv4(),
        name
    };


    classes.push(classe);
    response.status(200).json(classe);
});

router.get('/', (request, response) => {
    response.status(200).json(classes);
})

router.get('/:id', (request, response) => {
    const {id} = request.params

    let classe = {};

    response.status(200).json(classe);
})

module.exports = router;