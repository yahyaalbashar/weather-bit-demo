"use strict";
// server configs
const express=require("express");
const app=express();
const cors=require("cors");
const axios=require("axios");
require('dotenv').config();
app.use(cors());

// Cache


app.get('/',testController)

app.get("/weather",getWeatherDataController);

app.listen(8000,()=>{console.log("listining on port 8000")});


