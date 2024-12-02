const express=require('express');
const db=require('../config/connect');
const router = express.Router();

router.get('/',(req,res)=>{
const selectAll="SELECT * FROM STUDENT";
db.query(selectAll,(error,results)=>{
    if(error) throw error;
    res.status(200).json(
        {"List Of students are:":results}
    );
})
})


module.exports = router;
