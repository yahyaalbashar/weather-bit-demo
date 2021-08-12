"use strict";

class Forecast{
    constructor(forecast){
        this.date=forecast.datetime,
        this.description=forecast.weather.description
    }
}


module.exports=Forecast