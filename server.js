const express = require('express');

const app = express();

app.use(m1);
app.use(m2);
app.use(m3);


//Next function:    
function m1(req,res,next){
    console.log("Running middleware 1");
    next();
}

function m3(req,res,next){
    console.log("Running middleware 3");
    next();
}
function m2(req,res,next){
    console.log("Running middleware 2");
    next();
}

function m4(req,res,next){
    console.log("Running middleware 4");
    next();
}

app.get('/', (req,res)=>{
    console.log("Running");
    res.send("Home");
})

app.get("/about", m4, (req,res)=>{
    console.log("Running About request");
    res.send("About Page");
})

const port = 4565;
app.listen(port,()=>{
    console.log("server started")
})