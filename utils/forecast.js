const request = require('request');


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5a5d0154647a471a19da88f5fabdf706&query='+ latitude + ',' + longitude + '&units=f';

    request({url: url , json: true}, (error, {body})=> {
        
        if(error){
            callback("Unable to connect to weather service!\n", undefined);
        }else if(body.error){
            callback("Unable to find loaction!", undefined);
        }else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelsLike: body.current.feelslike,
            });
            
        }
    });
}

module.exports = forecast;