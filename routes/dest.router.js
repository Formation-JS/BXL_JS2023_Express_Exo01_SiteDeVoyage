const destController = require('../controllers/dest.controller');


const destRouter = require('express').Router();

destRouter.get('/', destController.index);
destRouter.get('/:id([0-9]+)', destController.detail);
destRouter.get('/not-found', destController.errorNotFound);

// Si on ne met pas de prefix lors de l'utilisation de la route dans « app.js »,
// il sera necessaire de l'ajouter sur chaque route. Exemple ↓
/*
destRouter.get('/dest/', destController.index);
destRouter.get('/dest/:id([0-9]+)', destController.detail);
destRouter.get('/dest/not-found', destController.errorNotFound);
*/

// L'ordre des routes peut être important lorsqu'il y a des parametres de route :
//  - s'il n'y a pas de restriction de type (number sans regex)
//  - si le parametre est de type string

module.exports = destRouter;