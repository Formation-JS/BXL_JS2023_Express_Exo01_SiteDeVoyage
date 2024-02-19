const destController = require('../controllers/dest.controller');


const destRouter = require('express').Router();

destRouter.get('/', destController.index);
destRouter.get('/:id', destController.detail);

// Si on ne met pas de prefix lors de l'utilisation de la route dans « app.js »,
// il sera necessaire de l'ajouter sur chaque route. Exemple ↓
/*
destRouter.get('/dest/', destController.index);
destRouter.get('/dest/:id', destController.detail);
*/

module.exports = destRouter;