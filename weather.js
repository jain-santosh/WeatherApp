document.addEventListener('DOMContentLoaded', function() {
    
    
    document.querySelector('form').onsubmit = function() {
        var q = document.querySelector('#location').value;
        fetch(`https://api.weatherapi.com/v1/current.json?key=16776569ce554b44914135907212911&q=${q}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            if(data != undefined){
                //location name
                document.querySelector('#loc').innerHTML = data.location.name;
                var localtime = data.location.localtime;
                const dateTime = localtime.split(" ");
                //time
                document.querySelector('#time').innerHTML = dateTime[1];
                //feels like celcius
                document.querySelector('#feel').innerHTML = `Feels like ${data.current.feelslike_c}`;
                //temperature celcius
                document.querySelector('#tempc').innerHTML = `${data.current.temp_c}&#176;`;
                //weather condition
                document.querySelector('#cond').innerHTML = data.current.condition.text;
            } else {
                document.querySelector('#result').innerHTML = `Invalid Location! Try again`
            }
            
        })

        .catch(error => {
            console.log('Error: ',error);
        })

        return false;
    }

    
});
