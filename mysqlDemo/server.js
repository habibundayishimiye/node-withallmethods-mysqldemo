const express = require('express'); // Import express
const db = require('./config/connect'); // Import the database connection function
const students =require('./routes/getAll')
const app = express(); // Initialize express application
const insertRouter=require('./routes/post');
const updateRouter=require('./routes/update');
const searchById=require('./routes/searchById');
const deleteById=require('./routes/deleteById');
const path=require('path');

 
// Middleware to parse JSON requests
app.use(express.json());
app.use("/student/insert",insertRouter);
app.use("/students",students);
app.use("/student/update",updateRouter);
app.use("/student/searchById",searchById);
app.use("/student/deleteById",deleteById);


//call static files
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.urlencoded({ extended: true }));

const port = 4000; // Define the port number
//get routres
// Define a GET route
//get the index.html
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
})
// Start the server and connect to the database
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
   // db(); // Call the database connection function after the server starts
});
