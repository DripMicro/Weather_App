const { copyFileSync } = require('fs');
const { connected } = require('process');
const request = require('request');
const chalk = require('chalk');

const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');



// const url = 'http://api.weatherstack.com/current?access_key=5a5d0154647a471a19da88f5fabdf706&query=37.8267,-122.4233';

// request({ url: url, json: true}, (error, response) => {
     
//     if(error){
//         console.log(chalk.red.inverse("Unable to connect to weather service!\n"));

//     } else if(response.body.error){
//         console.log(chalk.red.inverse(response.body.error.info));
//     }
//     else{
//         console.log( response.body.current.weather_descriptions[0] + ":"+ " The temperature is " + response.body.current.temperature + ". " + "It feels like " + response.body.current.feelslike);
//     }

// });




// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hhbWJodXJhaiIsImEiOiJja3h3OTIzdmM1d3N1MzBvNGR1aHllc250In0.eVZkrcaGra0MUMa1UwSglA&limit=1';

// request({ url: geocodeURL, json: true}, (error, response) => {
     
//     if(error){
//         console.log(chalk.red.inverse("Unable to connect to geocode service!\n"));
//     }else if(response.body.features === undefined){
//         console.log(chalk.red.inverse("Enter valid location!\n"));
//     }
//     else{
//         console.log(response.body.features[0].center);
//     }  
// });


// geoCode('boston', (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// })


forecast(-71.0596, 2.3605, (error, data) => {
    console.log('Error: ', error);
    console.log('Data', data);
});


// 5a5d0154647a471a19da88f5fabdf706

// pk.eyJ1Ijoic2hhbWJodXJhaiIsImEiOiJja3h3OTIzdmM1d3N1MzBvNGR1aHllc250In0.eVZkrcaGra0MUMa1UwSglA