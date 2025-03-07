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
app.use("/curriculumvitae", express.static('dist'));
app.use("/dryhire", express.static('dist'));
app.use("/gallery", express.static('dist'));
app.use("/legalinfo", express.static('dist'));
app.use("/technician", express.static('dist'));
app.use("/musician", express.static('dist'));

//Trying Images
//app.use("public", express.static('public'));
app.get('/public', function(req, res) {
    res.sendFile('./public/KSV_Portrait.jpg', { root : __dirname});
});

//For Parsing Post API
app.use(express.json());
app.use(cors());

//API endpoints
app.get('/api/message', (req, res) => {
    res.send('Welcome to my API');  // Sends 'Welcome to my API' as the response
});

let Test = 0;
app.get('/api/test', (req, res) => {
    if(Test === 0)
    {
        res.json({ message: 'Hello from Node.js!' });
        Test = 1;
    }
    else if(Test === 1)
    {
        res.json({ message: 'Hi from Node.js!' });
        Test = 0;
    }
});


app.get('/api/locations', (req, res) => {
    //const locationsJSON = require('./Data/locations.json');
    fs.readFile('./Data/locations.json', 'utf8', (err, data) => {
        res.send(data);
    });


});

app.post('/api/technicianReq', (req, res) => {
    const bookingReq = req.body;

    fs.readFile('./IncomingData/bookings.json', 'utf8', (err, data) => {
        const bookings = JSON.parse(data);
        bookingReq.bookingType = "technician";
        bookings.push(bookingReq);
        fs.writeFile('./IncomingData/bookings.json', JSON.stringify(bookings), 'utf8', () => {
            res.status(201).end();
        });
    });


    return res.send('Booking request was successfully received.');
});

app.post('/api/dryHireReq', (req, res) => {
    const dryHireReq = req.body;

    fs.readFile('./IncomingData/dryhires.json', 'utf8', (err, data) => {
        const hires = JSON.parse(data);
        hires.push(dryHireReq);
        fs.writeFile('./IncomingData/dryhires.json', JSON.stringify(hires), 'utf8', () => {
            res.status(201).end();
        });
    });


    return res.send('Dry Hire request was successfully received.');
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


    return res.send('Message was successfully received.');
});




//Either use the build in fetch function or the axios library to consume APIs

// Start the server on port 3000 and log a message to the console
app.listen(3000, () => console.log('Server running on http://localhost:3000'));