const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5e60fa65e89fac6bc1b68c9ac82af49d&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }
        else if(body.error){
            callback('Unable to find weather', undefined)
        }
        else {
            // callback(undefined, { 
            //     weather_descriptions: body.current.weather_descriptions[0],
            //     temperature: body.current.temperature,
            //     feelslike: body.current.feelslike
            // })
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out')
        }
    })
}

module.exports = forecast