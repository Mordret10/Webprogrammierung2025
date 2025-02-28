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
app.use("/booking", express.static('dist'));
app.use("/contact", express.static('dist'));
app.use("/curriculumvitae", express.static('dist'));
app.use("/dryhire", express.static('dist'));
app.use("/gallery", express.static('dist'));
app.use("/legalinfo", express.static('dist'));

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
    const locationsJSON = require('./Data/locations.json');
    res.send(locationsJSON);  // Sends 'Welcome to my API' as the response
});

app.post('/api/bookingReq', (req, res) => {
    const bookingReq = req.body;

    fs.readFile('./IncomingData/bookings.json', 'utf8', (err, data) => {
        const bookings = JSON.parse(data);
        bookings.push(bookingReq);
        fs.writeFile('./IncomingData/bookings.json', JSON.stringify(bookings), 'utf8', () => {
            res.status(201).end();
        });
    });


    return res.send('Booking request was successfully received.');
});




//Either use the build in fetch function or the axios library to consume APIs

// Start the server on port 3000 and log a message to the console
app.listen(3000, () => console.log('Server running on http://localhost:3000'));