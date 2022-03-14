const express = require('express')
const app = express()

const port = 8000;
const middlewareOne =((req,res,next)=>{   // middle ware in top only 
    // res.send('in middle 1');
    console.log("middle one");
    next();
})
const middlewareTwo =((req,res,next)=>{
    // res.send('in middle 2');
    console.log("middle two");
    next();
})

app.use(middlewareOne)
app.get('/user',(req,res)=>{
    res.send('hloo');
})
app.get('/res',middlewareTwo,(req,res)=>{
    res.send('use middle 2');
})
app.listen(port,()=>{
    console.log("app started");
})