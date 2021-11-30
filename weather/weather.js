const server_path = "http://weather.andrew.servrco.com/api/" // BE SURE TO CHANGE THIS BEFORE PUSHING TO PROD
var location_name = "yakima"

function directionFromDegrees(degrees) {
    if (degrees >= 0 && degrees <= 90) {
        return "N"
    }

    if (degrees >= 91 && degrees <= 180) {
        return "E"
    }

    if (degrees >= 181 && degrees <= 270) {
        return "S"
    }

    if (degrees >= 271 && degrees <= 360) {
        return "W"
    }
}

function update_weather() {
    fetch(server_path + "getWeather?location=" + location_name)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            loc.fullName.innerText = location_name
            temp.is.innerText = Math.round(response.temp.temp) + "°F"
            temp.feelsLike.innerText = "Feels like: " + Math.round(response.temp.feels_like)+ "°F"
            cloud.cloudPercent.innerText = response.cloud + "%"
            humidity.humidity.innerText = "Humidity: " + response.humid + "%"
            wind.direction.innerText = "Direction: " + directionFromDegrees(response.wind.deg)
            wind.speeds.innerText = "Speed: " + Math.round(response.wind.speed) + " MPH"

            document.getElementById("loadCover").remove()
        }).catch(() => {
            console.log("error")
            document.getElementById("loadCover").innerHTML = "<h1>Error loading data. Please retry later.</h1>"
        })
}

update_weather()
