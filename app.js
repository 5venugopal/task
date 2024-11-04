const express = require('express');
const dotEnv =require('dotenv');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const pgRoutes = require('./routes/pgRoutes')
const app =express();
const port = 3000;

app.listen(3000, ()=>{
    console.log(`server running at ${port}`)
});


//dotEnv.config()
app.use(bodyparser.json())
mongoose.connect("mongodb+srv://venugopalreddyankinapalli101:W3WDTQIoUmT0g19x@cluster0.jth13.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("mongoose connected successfully")
})
.catch((error)=>{
    console.log(`${error}`)
})

app.use('/pgs', pgRoutes)