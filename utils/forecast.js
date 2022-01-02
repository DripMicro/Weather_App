const request = require('request');


const forecast = (latitide, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5a5d0154647a471a19da88f5fabdf706&query='+ latitide + ',' + longitude + '&units=f';

    request({url: url , json: true}, (error, response)=> {
        
        if(error){
            callback("Unable to connect to weather service!\n", undefined);
        }else if(response.body.error){
            callback(response.body.error.info, undefined);
        }else {
            callback(undefined, {
                description: response.body.current.weather_descriptions[0],
                temperatur: response.body.current.temperature,
                feelsLike: response.body.current.feelslike,
            });
            
        }
    });
}

module.exports = forecast;