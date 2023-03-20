const con = require('./DB')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const functions = {
 
        AddBehaviorToStudent: (req, res) => {
            try {
                
                console.log(req.body)
                let { BehaviorDate,StudId,BehavId,ClassPasss} = req.body;
                console.log(BehaviorDate,StudId,BehavId,ClassPasss)
                con.query(`insert into studbehavior(BehaviorDate,StudId,BehavId,ClassPasss)
                values('${BehaviorDate}',${StudId},${BehavId},${ClassPasss});`    
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
        
        
        };
    
    
    
    module.exports = functions;