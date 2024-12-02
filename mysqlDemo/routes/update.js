const express = require('express');
const db = require('../config/connect'); // Import database connection
const router = express.Router(); // Correctly initialize the router
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {name,age}=req.body;
    const update="UPDATE STUDENT SET name=?, age=? WHERE id=?";
    db.query(update,[name,age,id],(error,results)=>{
        if(error){
            console.error('Error updating data:', error);
            return res.status(500).json({error: "Failed to update user"})
        }
        res.status(200).json({success: "User updated successfully"});
    })
})
module.exports = router;