const model = require('../models/event');

exports.index = (req, res) => {
    let events = model.find();
    let allCategories = model.getCategories();
    res.render('./pages/events', { events, allCategories });
};

exports.new = (req, res) => {
    res.render('./pages/newEvent');
};

exports.create = (req, res) => {
    let event = req.body;
    let image = '/images/' + req.file.filename;
    console.log("From create: IMG src is " + image);
    model.create(event, image);
    console.log(event);
    res.redirect('./events');
};

exports.show = (req, res, next) => {
    let id = req.params.id;
    let event = model.findById(id);
    let formattedStart = '';
    let formattedEnd = '';
    console.log("The ID is " + id);
    if (event) {
        formattedStart = model.getFormattedTime(event, event.start);
        formattedEnd = model.getFormattedTime(event, event.end);
        console.log("dtFormatted after conversion: " + event.dtFormatted);
        res.render('./pages/event', { event, formattedStart, formattedEnd });
    } else {
        let err = new Error('Cannot find an event with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.edit = (req, res, next) => {
    let id = req.params.id;
    let event = model.findById(id);
    //Categories array to send to view for populating previously selected category
    let categories = [
        "Food Trucks",
        "Special Events",
        "Grand Openings",
        "Brewery Events",
        "Other"
    ]
    if (event) {
        console.log(event.start);
        res.render('./pages/edit', { event, categories });
    } else {
        let err = new Error('Cannot find an event with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.update = (req, res, next) => {
    let event = req.body;
    let id = req.params.id;
    let image = '/images/' + req.file.filename;
    if (model.updateById(id, event, image)) {
        console.log("Update function - start: " + event.start);
        res.redirect("/events/" + id);
    } else {
        let err = new Error('Cannot find an event with id ' + id);
        err.status = 404;
        next(err);
    };
};

exports.delete = (req, res, next) => {
    // res.send('update event with id ' + req.params.id);
    let id = req.params.id;
    if (model.deleteById(id)) {
        res.redirect('/events');
    } else {
        let err = new Error('Cannot find an event with id ' + id);
        err.status = 404;
        next(err);
    };
};