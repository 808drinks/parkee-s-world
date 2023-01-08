
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
const apiKey = "ee79adae08d0a763d33484f441625554"


function onGeoOk(event) {
    console.log(event)
    const lat = event.coords.latitude;
    const long = event.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
    fetch(url).then(reponse => reponse.json()).then(data => {
        const weather = document.querySelector(".header--info__weather")
        weather.innerText = `${data.name} ${data.main.temp}℃ ${data.weather[0].main}`})}

function onGeoError() {
    alert("Sorry, you can't receive the weather")}