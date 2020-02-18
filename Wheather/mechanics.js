$(document).ready(function() {
    $('form').submit(function() {
        var ciudad = $('#ciudad').val();
        console.log(ciudad);
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&&appid=e43b800275554343971543bc29217834', function (res) {
            console.log(res)
            var tiempo = "";
            tiempo += "<h2>" + res.name + ", " + res.sys.country + "</h2>"
            tiempo += "<div id='info'>"
            tiempo += "<h3>Ubicacion:</h3>"
            tiempo += "<p>Longitud: " + res.coord.lon + "</p>"
            tiempo += "<p>Latitud: " + res.coord.lat + "</p>"
            tiempo += "</div>"
            tiempo += "<div id='tiempo'>"
            tiempo += "<h3>Tiempo:</h3>"
            if (res.weather[0].main == "Clear"){
                tiempo += "<img src='clear.png' alt='Clear'>"
            }
            else if (res.weather[0].main == "Fog" || res.weather[0].main == "Mist"){
                tiempo += "<img src='fog.png' alt='Fog'>"
            }
            else if (res.weather[0].main == "Rain"){
                tiempo += "<img src='rain.png' alt='Rain'>"
            }
            else if (res.weather[0].main == "Snow"){
                tiempo += "<img src='snow.png' alt='Snow'>"
            }
            else if (res.weather[0].main == "Haze"){
                tiempo += "<img src='haze.png' alt='Haze'>"
            }
            else if (res.weather[0].main == "Thunderstorm"){
                tiempo += "<img src='thunderstorm.png' alt='Thunderstorm'>"
            }
            else if (res.weather[0].main == "Clouds"){
                tiempo += "<img src='clouds.png' alt='Clouds'>"
            }
            tiempo += "<p>Clima: " + (parseInt(res.main.temp) - 273.15 + '').substr(0, 4) + '&#8451, ' + (((parseInt(res.main.temp) - 273.15)*9/5 + 32) + '').substr(0, 4) + '°F' + "</p>"
            tiempo += "</div>"
            $("#resultado").html(tiempo);
        }, 'json');
        return false;
    });
});