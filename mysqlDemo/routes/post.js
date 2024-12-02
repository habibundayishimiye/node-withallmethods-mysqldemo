const express = require('express');
const db = require('../config/connect'); // Import database connection
const router = express.Router(); // Correctly initialize the router

// Insert a student into the database
router.post('/', (req, res) => {
    const { name, age } = req.body; // Destructure request body
    console.log(`data is ${req.body}`)
    const sql = "INSERT INTO STUDENT(name, age) VALUES(?, ?)";
    
    db.query(sql, [name, age], (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return res.status(500).json({ error: "Failed to insert user" });
        }
        res.status(201).json({ success: "User inserted successfully", id: results.insertId });
    });
});



module.exports = router;
