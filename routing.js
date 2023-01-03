const express = require('express')
const app = express()

app.use("/" , (req,res,next)=>{
    console.log("first use is called");
    res.send("Home page");
    next();
})

app.use("/product" , (req,res,next)=>{
    console.log("Not always executed")
    // res.send("express routing example")
//when we use this res.send, the above res.send has to be commented and the about route doesnt respond anymore and gives the error
//CANNOT GET /
})

app.listen(8000)