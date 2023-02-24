const { DateTime } = require('luxon');
const { v4: uuidv4 } = require('uuid');

const events = [
    {
        id: '1',
        category: 'Food Trucks',
        title: 'Weekend Live Music & Food Trucks',
        details: "Come join us for a weekend full of live music and food trucks! Featuring house band 'Out of the Blue' and other regionally trending artists! Cousins Maine Lobster will be serving up fresh lobster rolls. You don't want to miss this!",
        host: 'Blue Blaze Brewing',
        location: '528 S Turner Ave, Charlotte, NC',
        start: '2023-02-20T20:00',
        end: '2023-02-20T22:00',
        image: '/images/Placeholder.png',
        updated: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '2',
        category: 'Food Trucks',
        title: 'Food Truck Fridays',
        details: 'Come join us for Food Truck Friday!',
        host: 'Logan Hasty',
        location: 'S Bland St. Charlotte, NC',
        start: '2023-02-20T20:00',
        end: '2023-02-20T22:00',
        image: '/images/Placeholder.png',
        updated: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '3',
        category: 'Food Trucks',
        title: 'Food Truck Fridays',
        details: 'Come join us for Food Truck Friday!',
        host: 'Logan Hasty',
        location: 'S Bland St. Charlotte, NC',
        start: '2023-02-20T20:00',
        end: '2023-02-20T22:00',
        image: '/images/Placeholder.png',
        updated: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '4',
        category: 'Special Events',
        title: 'Charlotte Wine & Food Weekend',
        details: 'Come join us for Wine & Food Weekend!!',
        host: 'Logan Hasty',
        location: 'Uptown - Charlotte, NC',
        start: '2023-02-20T20:00',
        end: '2023-02-20T22:00',
        image: '/images/Placeholder.png',
        updated: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '5',
        category: 'Special Events',
        title: 'Charlotte Wine & Food Weekend',
        details: 'Come join us for Wine & Food Weekend!!',
        host: 'Logan Hasty',
        location: 'Uptown - Charlotte, NC',
        start: '2023-02-20T20:00',
        end: '2023-02-20T22:00',
        image: '/images/Placeholder.png',
        updated: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '6',
        category: 'Special Events',
        title: 'Beer, Bourbon, & BBQ)',
        details: 'Come join us for Beer, Bourbon, & BBQ!',
        host: "Jon G's BBQ",
        location: 'Concord Mills Parking Lot, Concord, NC',
        start: '2023-02-20T20:00',
        end: '2023-02-20T22:00',
        image: '/images/Placeholder.png',
        updated: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    }
];

exports.getCategories = () => {
    let categories = [];
    if (events.length) {
        events.forEach(event => {
            if (!categories.includes(event.category)) {
                categories.push(event.category);
            }
        });
    };
    return categories;
};

exports.find = () => events;
exports.findById = id => events.find(event => event.id === id);
exports.updateById = (id, updatedEvent, image) => {
    let event = events.find(event => event.id === id);
    if (event) {
        event.id = event.id;
        event.category = updatedEvent.category;
        event.title = updatedEvent.title;
        event.host = updatedEvent.host;
        event.details = updatedEvent.details;
        event.location = updatedEvent.location;
        event.dtFormatted = updatedEvent.dtFormatted;
        event.start = updatedEvent.start;
        event.end = updatedEvent.end;
        event.image = image;
        event.updated = updatedEvent.updated;
        return true;
    } else {
        return false;
    }
}

exports.create = (newEvent, image) => {
    newEvent.id = uuidv4();
    newEvent.image = image;
    newEvent.updated = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    events.push(newEvent);

}

exports.getFormattedTime = (event, dt) => {
    let date = DateTime.fromISO(dt);
    return date.toLocaleString(DateTime.DATETIME_SHORT);
};

exports.deleteById = (id) => {
    let index = events.findIndex(event => event.id == id);
    if (index !== -1) {
        events.splice(index, 1);
        return true;
    } else {
        return false;
    }
}