const express=require('express');
const db=require('../config/connect');
const router = express.Router();

router.delete('/:id',(req,res)=>{
const id = req.params.id;
const deleteById="DELETE  FROM STUDENT WHERE id = ?";
db.query(deleteById,[id],(error,results)=>{
    if(error) throw error;
    res.status(200).json(
        {"message":"student deleted successfully"}
    );
})
})


module.exports = router;
