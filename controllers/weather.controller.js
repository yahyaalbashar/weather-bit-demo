"use strict";
const Forecast=require("../models/Forecast.model");
const axios=require("axios");
const Cache=require("../helpers/ForeCastCache.helper");

const foreCastCache=new Cache([]);

const testController=(req,res)=>{
    res.send("hello");
}

const getWeatherDataController=(req,res)=>{
        if (foreCastCache.forecastData.length){
            res.json({message:"coming from cache: ",data:foreCastCache.forecastData});
        }
        else{
            let queryParams={
                params:{
                    city:"Amman",
                    key:process.env.WEATHERBIT_API_KEY
                }
            }
            const url=process.env.WEATHERBIT_ENDPOINT;   
            axios.get(url, queryParams).then(result=>{
                let data=result.data.data;
                let modeledData=data.map(item=>{
                    return new Forecast(item)
                });
                foreCastCache.forecastData=modeledData;
                res.json({message:"coming from weather bit api: ",data:modeledData});
        })            
        }

}

module.exports={
    testController,
    getWeatherDataController
}