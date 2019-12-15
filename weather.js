const API_KEY = "598e657d174398340f06a702ee0e3320";
const COORD_LS = "coords";

const weatherDiv = document.querySelector("#weather");
const weather = weatherDiv.querySelector("span");

function getWeather(lat, lng)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(resopnse){
        return resopnse.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });

}

function saveCoords(coordsObj)
{
    localStorage.setItem(COORD_LS, JSON.stringify(coordsObj));
}

function handleGeoError()
{
    console.log("Location Error");
}

function handleGeoSuccess(position)
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORD_LS);
    if(loadedCoords === null)
    {
        askForCoords();
    }
    else
    {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init()
{
    loadCoords();
}

init();