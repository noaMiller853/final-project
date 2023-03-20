const express=require('express')
const router=express.Router()
const teacher=require('./Teacher')
const student=require('./Student')
const behaviorStudent=require('./BehaviorStudent')




router.get('/',(req,res)=>{
    res.send(' gettttttttttt')
})
router.use('/teacher',teacher);
router.use('/student',student)
router.use('/behaviorStudent',behaviorStudent);


module.exports=router;