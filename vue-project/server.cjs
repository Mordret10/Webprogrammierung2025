// Import the Express library
const express = require('express');
// Import File System library
const fs = require('fs')
const cors = require('cors');

// Create an Express application instance
const app = express();



// Vue builds into the dist directory, meaning every wep page needs to refer to this exact directory
app.use("/", express.static('dist'));
app.use("/about", express.static('dist'));
app.use("/gigs", express.static('dist'));
app.use("/overviewBookings", express.static('dist'));
app.use("/contact", express.static('dist'));
app.use("/cv", express.static('dist'));
app.use("/dryhire", express.static('dist'));
app.use("/gallery", express.static('dist'));
app.use("/legalinfo", express.static('dist'));
app.use("/technician", express.static('dist'));
app.use("/musician", express.static('dist'));
app.use("/owner", express.static('dist'));

//For Parsing Post API
app.use(express.json());
app.use(cors());

//API endpoints

app.get('/api/locations', (req, res) => {
    //const locationsJSON = require('./Data/locations.json');
    fs.readFile('./Data/locations.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/api/materialprices', (req, res) => {
    //const locationsJSON = require('./Data/locations.json');
    fs.readFile('./Data/materialPrices.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/api/getBookings', (req, res) => {
    //const locationsJSON = require('./Data/locations.json');
    fs.readFile('./IncomingData/bookings.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/api/getContacts', (req, res) => {
    //const locationsJSON = require('./Data/locations.json');
    fs.readFile('./IncomingData/contact.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/api/booking', (req, res) => {
    const bookingReq = req.body;

    fs.readFile('./IncomingData/bookings.json', 'utf8', (err, data) => {
        const bookings = JSON.parse(data);
        bookings.push(bookingReq);
        fs.writeFile('./IncomingData/bookings.json', JSON.stringify(bookings), 'utf8', () => {
            res.status(201).end();
        });
    });
    return res.json({msg: 'Booking request has been successfully received.'});
});

app.post('/api/contactReq', (req, res) => {
    const contactReq = req.body;

    fs.readFile('./IncomingData/contact.json', 'utf8', (err, data) => {
        const contact = JSON.parse(data);
        contact.push(contactReq);
        fs.writeFile('./IncomingData/contact.json', JSON.stringify(contact), 'utf8', () => {
            res.status(201).end();
        });
    });

    return res.send('Message has been successfully received.');
});




//Either use the build in fetch function or the axios library to consume APIs

// Start the server on port 3000 and log a message to the console
app.listen(3000, () => console.log('Server running on http://localhost:3000'));