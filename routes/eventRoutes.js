const express = require('express');
const eventController = require('../controllers/eventController');
const eventRouter = express.Router();
const {fileUpload} = require('../middleware/fileUpload');

//GET /events: send all events
eventRouter.get('/', eventController.index);

//GET /stories/new: send html form for creating a new story
eventRouter.get('/new', eventController.new);

//POST /stories: create a new story
eventRouter.post('/', fileUpload, eventController.create);

//GET /events/:id: send details of event identified by id
eventRouter.get('/:id', eventController.show);

//GET /events/:id/edit: send html form for editing existing event
eventRouter.get('/:id/edit', eventController.edit);

//PUT /events/:id: update the event identified by id
eventRouter.put('/:id', fileUpload, eventController.update);

//DELETE /events/:id: delete event identified by id
eventRouter.delete('/:id', eventController.delete);

module.exports = eventRouter;