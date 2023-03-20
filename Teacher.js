const express=require('express')
const router=express.Router()
const app=express()
const teacher=require('../controller/Teacher')
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 



router.post('/addTeacher',teacher.AddTeacher);
router.get(`/loginManager/:id/:isManager`,teacher.LoginManger);
 router.get(`/getAllTeachers`,teacher.GetAllTeachers);
 router.get(`/getTeacherById/:id`,teacher.GetTeacherById);
 router.put(`/updateTeacherForClass/:id`,teacher.UpdateTeacherForClass);
 router.get(`/deleteTeacher/:id`,teacher.DeleteTeacher)

module.exports=router;