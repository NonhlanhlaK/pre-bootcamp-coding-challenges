function getTemperatureFereignheight(num1){
    var temperature = 'fereighnheight';
    return num1 * 33.8 + temperature;
    
}

 function getTemperatureCelcius(num1){
        var temperature = 'celcius';
        return num1 / 33.8 + temperature;
    }


console.log(getTemperatureFereignheight())

console.log(getTemperatureCelcius())