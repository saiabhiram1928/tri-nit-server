const express = require('express');
const mongoose =require("mongoose")
const bodyparser = require('body-parser')
const app = express();
const applicationRouter = require('./Routes/application')




const port=3001
const mongo_uri="mongodb://localhost:27017/Practice"




mongoose.connect(mongo_uri ,{
    useNewurlParser: true
})


mongoose.connection.once('open' , ()=> console.log("connected")).on('error' ,(err)=>console.log("failed"))

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});

app.use('/application' ,applicationRouter)


app.listen(port ,()=>{
    console.log(`server started at port ${port}`)
})