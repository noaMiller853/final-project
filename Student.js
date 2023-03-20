const express=require('express')
const router=express.Router()
const app=express()
const student=require('../controller/Student')
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

router.get(`/getAllStudentByClass/:passClass`,student.GetAllStudentByClass);
router.get(`/getStudentById/:id`,student.GetStudentById)
router.post('/addStudent',student.AddStudent);
router.delete(`/deleteStudent/:id`,student.DeleteStudent);
router.get('/getStudentGragh',student.GetStudentGragh)



module.exports=router;