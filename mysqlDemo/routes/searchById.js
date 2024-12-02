const express=require('express');
const db=require('../config/connect');
const router = express.Router();

router.get('/:id',(req,res)=>{
    const {id}=req.params;
const selectById="SELECT * FROM STUDENT  WHERE id=?";
db.query(selectById,[id],(error,results)=>{
    if(error) throw error;
    res.status(200).json(
        {"Student Found":results}
    );
})
})


module.exports = router;
