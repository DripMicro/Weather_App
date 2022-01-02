//external modules
const { copyFileSync } = require('fs');
const { connected } = require('process');
const request = require('request');

//local modules
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
const { default: chalk } = require('chalk');


const location = process.argv[2];

if(!location){
    console.log("Please provide a location.");
} else{

    //geocode function call
    geoCode(location, (error, {latitide,longitude, placeName} = {}) => {

    if(error){
        return console.log(chalk.red.inverse('Error: ', error));
    }

    //forecast function call
    forecast(latitide, longitude, (error, {description, temperature, feelsLike} = {}) => {

        if(error){
            return console.log(chalk.red.inverse('Error: ', error));
        }
            console.log(chalk.black.bgBlue("Place Name:") + "    "+chalk.green.bold(placeName));
            console.log(chalk.black.bgBlue("Description:") +"   "+ chalk.yellow.bold(description));
            console.log(chalk.black.bgBlue("Temperature:") +"   "+ chalk.yellow.italic(temperature) + chalk.yellow.italic(" F"));
            console.log(chalk.black.bgBlue("Feels like:") +"    "+ chalk.yellow.italic(feelsLike)+ chalk.yellow.italic(" F"));
    });
    
});
}






// 5a5d0154647a471a19da88f5fabdf706

// pk.eyJ1Ijoic2hhbWJodXJhaiIsImEiOiJja3h3OTIzdmM1d3N1MzBvNGR1aHllc250In0.eVZkrcaGra0MUMa1UwSglA