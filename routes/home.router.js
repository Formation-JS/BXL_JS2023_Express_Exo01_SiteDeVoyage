const homeController = require('../controllers/home.controller');


const homeRouter = require('express').Router();

homeRouter.get('/', homeController.index);
homeRouter.get('/contact', homeController.contact);
homeRouter.post('/contact', homeController.contact_POST);
homeRouter.get('/contact/confirm', homeController.confirm);

module.exports = homeRouter;