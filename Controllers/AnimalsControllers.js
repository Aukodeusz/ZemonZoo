const express = require('express');
const router = express.Router();
const animalsService = require('./animalsService');

router.get('/', (req, res) => {
    res.json(animalsService.getAllAnimals());
});

router.get('/:id', (req, res) => {
    const animal = animalsService.getAnimalById(req.params.id);
    if (animal) {
        res.json(animal);
    } else {
        res.status(404).send('Animal not found');
    }
});

router.get('/endangered', (req, res) => {
    res.json(animalsService.getEndangeredAnimals());
});

router.get('/habitat/:habitat', (req, res) => {
    res.json(animalsService.getAnimalsByHabitat(req.params.habitat));
});

router.get('/species', (req, res) => {
    res.json(animalsService.getAnimalsBySpecies(req.query.species));
});

router.post('/', (req, res) => {
    const newAnimal = animalsService.addAnimal(req.body);
    res.status(201).json(newAnimal);
});

router.put('/:id', (req, res) => {
    const updatedAnimal = animalsService.updateAnimal(req.params.id, req.body);
    if (updatedAnimal) {
        res.json(updatedAnimal);
    } else {
        res.status(404).send('Animal not found');
    }
});

router.delete('/:id', (req, res) => {
    if (animalsService.deleteAnimal(req.params.id)) {
        res.status(204).send();
    } else {
        res.status(404).send('Animal not found');
    }
});

module.exports = router;
