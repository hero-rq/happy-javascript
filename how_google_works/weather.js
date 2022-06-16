const API_KEY = "secret bro"

function geoOn(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metrics`;
    fetch(url)
     .then((response) => response.json())
     .then((data) => {
       const weather = document.querySelector("#weather span:first-child");
       const city = document.querySelector("#weather span:last-child");
       city.innerText = data.name;
       weather.innerText = data.weather[0].main; 
     });
}

function geoOff() {
    console.log("we can't find it");
}

navigator.geolocation.getCurrentPosition(geoOn, geoOff);
