"use strict";
class Cache{
    constructor(forecastData){
        this.forecastData=forecastData
        this.timestamp=Date.now()
    }
}

module.exports=Cache