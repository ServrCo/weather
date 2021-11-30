// weather.js
// requests weather information and displays it
// °F

class loc { // location class
    constructor() {
        this.fullName = document.getElementById("loc.fullName")
    }
}

class temp {
    constructor() {
        this.is = document.getElementById("temp.is")
        this.feelsLike = document.getElementById("temp.feelsLike")
    }
}

class cloud {
    constructor() {
        this.cloudPercent = document.getElementById("cloud.cloudPercent")
    }
}

class humidity {
    constructor() {
        this.humidity = document.getElementById("humidity.humidity")
    }
}

class wind {
    constructor() {
        this.direction = document.getElementById("wind.direction")
        this.speeds = document.getElementById("wind.speeds")
    }
}

class general {
    constructor() {
        this.datetime = document.getElementById("general.datetime")
    }
}

general = new general()
cloud = new cloud()
temp = new temp()
loc = new loc()
humidity = new humidity()
wind = new wind()

function testValues() {
    loc.fullName.innerText = "Yakima, WA"
    temp.is.innerText = "32°F"
    temp.feelsLike.innerText = "Feels like: 34°F"
    cloud.cloudPercent.innerText = "40%"
    humidity.humidity.innerText = "Humidity: 54%"
    wind.direction.innerText = "Direction: N"
    wind.speeds.innerText = "Speed: 5 MPH"
}