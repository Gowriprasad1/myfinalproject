require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
app.use('/public',express.static(__dirname+'/public'));
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.post('/',(req,res)=>{
     res.set({
        "Allow-access-Allow-Origin":'*'  
    })
    return res.sendFile(__dirname+'/mens.html');
})
app.get('/mens.html',(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'  
    })
    return res.sendFile(__dirname+'/mens.html');
 })

 app.get('/payment.html',(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'  
    })
    return res.sendFile(__dirname+'/payment.html');
 })
 app.get('/mens.html',(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'  
    })
    return res.sendFile(__dirname+'/payment.html');
 })
 app.post('/Addtocart',(req, res)=>{
    var title=req.section.title;
    var price=parseInt(req.section.price);
    var count=req.section.itemid;
    var items={'title':title,'price':price * parseInt(count),'count':count};
    db.collection('customers').insertOne(items,(err,collection)=>{
        if(err) throw err;
        console.log('successfully insert data');
    });
    
    return res.sendFile(__dirname+'/payment.html')//redirect to success page
})

 app.get('/success.html',(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'  
    })
    return res.sendFile(__dirname+'/success.html');
 })
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));
