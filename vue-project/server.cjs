// Import the Express library
const express = require('express');

// Create an Express application instance
const app = express();

// Vue builds into the dist directory, meaning every wep page needs to refer to this exact directory
app.use("/", express.static('dist'));
app.use("/about", express.static('dist'));


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

//Either use the build in fetch function or the axios library to consume APIs

// Start the server on port 3000 and log a message to the console
app.listen(3000, () => console.log('Server running on http://localhost:3000'));