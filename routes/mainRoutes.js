const express = require('express');
const mainController = require('../controllers/mainController');
const mainRouter = express.Router();

//GET home page
mainRouter.get('/index', mainController.index);

//GET about page
mainRouter.get('/about', mainController.about)

//GET contact page
mainRouter.get('/contact', mainController.contact);

module.exports = mainRouter;