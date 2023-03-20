var mysql = require('mysql2');
const { string } = require('yup');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "IshaiNoa3075",
  database:"dbbehavior"

});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(`select * from Teacher;`,(err,result)=>{
    if(err)
     throw err
     console.log(result)
return result})


});
module.exports=con;