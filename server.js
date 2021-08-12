"use strict";

// server configs
const express=require("express");
const app=express();
const cors=require("cors");

require("dotenv").config();
const {testController,getWeatherDataController}=require("./controllers/weather.controller");
app.use(cors());
const PORT=process.env.PORT;

app.get('/',testController)

app.get("/weather",getWeatherDataController);
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})