const express = require('express'); //Importing express 
const path = require('path'); //Importing path from js

const app = express(); //Starting the express app
const port = 3000; //Setting up a port for the server for the web app to run on 

// Using express to fetch the static page content from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Speciifying a route to fetch the html file 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Speciifying a route to fetch the cart page 
app.get('/cart', (req, res) => {
    res.redirect('/'); // Ridirecting it to the html file because the cart page is setup there
});

//Running the server at localhost3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
