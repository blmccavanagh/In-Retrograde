var sdkClient = require('./sdk');

// make some dummy data in order to call vedic rishi api
var data = {
    'date': 18,
    'month': 9,
    'year': 1992,
    'hour': 16,
    'minute': 29,
    'latitude': 29.7874,
    'longitude': 95.7863,
    'timezone': -5.
};

// api name which is to be called
var resource = "astro_details";

// call horoscope apis
sdkClient.call(resource, data.date, data.month, data.year, data.hour, data.minute, data.latitude, data.longitude, data.timezone, function(error, result){

    if(error)
    {
        console.log("Error returned!!");
    }
    else
    {
        console.log('Response has arrived from API server --');
        console.log(result);
    }
});