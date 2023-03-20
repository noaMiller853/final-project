const con = require('./DB')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const functions = {
        AddStudent: (req, res) => {
            try {
                console.log(req.body)
                let {StudTZ,StudName,StudAddress,StudPhone,StudMail,ClassPass } = req.body;
                con.query(`insert into student(StudTZ,StudName,StudAddress,StudPhone,StudMail,ClassPass) 
                values('${StudTZ}','${StudName}','${StudAddress}','${StudPhone}','${StudMail}',${ClassPass});`    
                    , (err, result) => {
                        if (err) {
                            console.log(err)
                            res.status(404).send('the details are not correct')
                        }
                        else {
                         res.send(result)
                                
                        }
                        
                    })
    
            }
            catch (err) {
    
                console.log(err);
                res.sendStatus(500)
                res.send(err)
    
            }
        },
 
       //  רטים לגרף לכל התלמידים מחזיר ממוצע של התנהגות שלהם עם שם
        GetStudentGragh:(req,res)=>{
            try{
                con.query(`select t.StudName,AVG( s.BehavId) as avgBehav from student t join studbehavior s on t.StudId=s.StudId
                group by t.StudId`, (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(404).send('the details are not correct')
                }
                else {
                  
                            res.send(result)
                        
                }
            })

    }
    catch (err) {

        console.log(err);
        res.sendStatus(500)
        res.send(err)

    }
        },
        GetStudentById:(req,res)=>{
            try{
                let id=parseInt(req.params.id);
                con.query(`select t.*,s.BehaviorDate,s.BehavId from student t join studbehavior s on t.StudId=s.StudId
                where t.StudId=${id}`, (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(404).send('the details are not correct')
                }
                else {
                  
                            res.send(result)
                        
                }
            })

    }
    catch (err) {

        console.log(err);
        res.sendStatus(500)
        res.send(err)

    }
        },
       //פרטים על הכיתה
        GetAllStudentByClass: (req, res) => {
            try {
                let ClassPass=parseInt(req.params.ClassPass);
                con.query(`select t.*,s.BehaviorDate,s.BehavId from student t join studbehavior s on t.ClassPass=s.ClassPasss
                where ClassPass=${ClassPass}`, (err, result) => {
    
                    if (err) {
                        res.status(404).send('the details are not correct')
                    }
    
                    res.send(result)
                })
            }
            catch {
                console.log(err);
                res.sendStatus(500)
                res.send(err)
    
            }
        },
        DeleteStudent: (req, res) => {
            try {
                const id=parseInt(req.body.id);
                if(id!=NaN){

                con.query(`delete from studbehavior
                where StudId=${id};`, (err, result) => {
                    if (err) {
                        console.log(err)
                        res.status(404).send('the members are not correct')
                    }
                    else
                        res.send(result)
                })}
            } catch (err) {
                console.log("delete from studbehavior table",err);
                res.sendStatus(500)
                res.send(err)
            }
            con.query(`delete from student
            where StudId=${id};`, (err, result) => {
                    if (err) {
                        res.status(404).send('the members are not correct')
                    }
                    else
                        res.send(result)
                })
            
            
               
        },
     
      
        };
    
    
    
    module.exports = functions;