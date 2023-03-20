const con = require('./DB')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const functions = {
        AddTeacher: (req, res) => {
      
            try {

                console.log(req.body)
                let {ClassPass,TeachTZ,  IsManager, TeachName, TeachAddress, TeachPhone,TeachMail } = req.body;
                con.query(`insert into teacher(TeachTZ,IsManager,TeachName,TeachAddress,TeachPhone,TeachMail,ClassPass) 
                values('${TeachTZ}','${IsManager}','${TeachName}','${TeachAddress}','${TeachPhone}','${TeachMail}','${ClassPass}');`    
                    , (err, result) => {
                        if (err) {
                            console.log(err)
                            res.status(404).send('the details are not correct')
                        }
                        else {
                            con.query(`insert into class(ClassPass) 
                            values(${ClassPass});`    
                    , (err, result) => {
                        if (err) {
                            console.log(err)
                            res.status(404).send('the details are not correct')
                        }
                        else {
                          
                                    res.send(result)
                                
                        }
                    })
                          
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
        GetTeacherById:(req,res)=>{
            try{
                let id=parseInt(req.params.id);
                con.query(`select * from teacher
             where TeachId=${id}`, (err, result) => {
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
       UpdateTeacherForClass:(req,res)=>{ 
        try {
        let id=parseInt(req.params.id);
        let{ClassPass}=req.body();
        con.query(`UPDATE teacher
        SET ClassPass=${ClassPass}
        WHERE  TeachId=${id};`, (err, result) => {
            if (err) {
                res.status(404).send('the details are not correct')
            }
            else
                res.send(result)
        });

    } catch (err) {
        console.log(err);
        res.sendStatus(500)
        res.send(err)
    }
},
        GetAllTeachers: (req, res) => {
            try {
                
                con.query(`select * from teacher
                where ClassPass!=000`, (err, result) => {
    
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
        
       LoginManger:(req,res)=>{
        try{
            let id=parseInt(req.params.id);
            let isManager=parseInt(req.params.isManager) ;
            con.query(`select * from teacher
         where TeachId=${id} and ${isManager}=1`, (err, result) => {
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
       DeleteTeacher:(req,res)=>{
        try {
            let id=parseInt(req.params.id);
            con.query(`UPDATE teacher
            SET ClassPass=000
            WHERE  TeachId=${id};`, (err, result) => {
                if (err) {
                    res.status(404).send('the details are not correct')
                }
                else
                    res.send(result)
            });
    
        } catch (err) {
            console.log(err);
            res.sendStatus(500)
            res.send(err)
        }
       },
       
        };
    
    
    
    module.exports = functions;