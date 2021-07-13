const express=require('express');
const path=require('path');
const db=require('./database');
const port=8000;
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('image'));
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));
app.get('/',function(req,res){
     res.render('index');
     res.end();
});
app.post('/create',function(req,res){
    let first_name=req.body.first_name;
    let last_name=req.body.last_name;
    let email=req.body.email;
    console.log(req.body);
    let sql = "INSERT INTO contact VALUES ('"+first_name+"','"+last_name+"','"+email+"')";
    db.query(sql,function (err, data) { 
        if (err) throw err;
           console.log("contact data is inserted successfully "); 
    });
   res.redirect('/');
})

app.listen(port,function(err){
    if(err){
        console.log('error in running the server',err);
    }
    console.log('My express server is running on the port:',port);
    });