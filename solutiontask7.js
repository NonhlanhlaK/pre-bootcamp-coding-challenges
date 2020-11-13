function getTemperatureFereignheight(num1) {
    var temperature = 'fereighnheight'
    return num1 * 33.8 + temperature
    
}

 function getTemperatureCelcius(num1) {
        var temperature = 'celcius'
        return num1 / 33.8 + temperature
    }

//this part executes function getTemperatureFereignheight
console.log(getTemperatureFereignheight())

//this part executes function getTemperatureCelcius
console.log(getTemperatureCelcius())