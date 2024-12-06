const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'zoo.json');
let animals = require(dataPath);

const saveData = () => {
    fs.writeFileSync(dataPath, JSON.stringify(animals, null, 2));
};

const getAllAnimals = () => animals;

const getAnimalById = (id) => animals.find(animal => animal.id === parseInt(id));

const getEndangeredAnimals = () => animals.filter(animal => animal.isEndangered);

const getAnimalsByHabitat = (habitat) => animals.filter(animal => animal.habitat === habitat);

const getAnimalsBySpecies = (species) => animals.filter(animal => animal.species === species);

const addAnimal = (animal) => {
    const newAnimal = { ...animal, id: animals.length + 1 };
    animals.push(newAnimal);
    saveData();
    return newAnimal;
};

const updateAnimal = (id, updatedInfo) => {
    const index = animals.findIndex(animal => animal.id === parseInt(id));
    if (index !== -1) {
        animals[index] = { ...animals[index], ...updatedInfo };
        saveData();
        return animals[index];
    }
    return null;
};

const deleteAnimal = (id) => {
    const index = animals.findIndex(animal => animal.id === parseInt(id));
    if (index !== -1) {
        animals.splice(index, 1);
        saveData();
        return true;
    }
    return false;
};

module.exports = {
    getAllAnimals,
    getAnimalById,
    getEndangeredAnimals,
    getAnimalsByHabitat,
    getAnimalsBySpecies,
    addAnimal,
    updateAnimal,
    deleteAnimal
};
