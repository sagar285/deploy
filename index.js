const express =require("express");
const path = require("path")
const app=express();
const pathdir =path.join(__dirname,"public")
console.log(pathdir);

app.get("/",(req,res)=>{
    res.sendFile(`${pathdir}/index.html`)
})
app.listen(4000,()=>{
    console.log("server proper run");
})

