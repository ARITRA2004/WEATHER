const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "a7ceb66bd0msh8d1b87629a6655ap1ac00bjsnebe75a9f02a4",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
};

let city = document.getElementById("cityname"); 
let btn = document.getElementById("button")
let URL = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="
let title = document.getElementById("title");
let image = document.getElementById("tempera");
let text = document.getElementById("text");
let place = document.getElementById("weather_place");
let windspeed = document.getElementById("windspeed");
let humidity = document.getElementById("humidity");
let maxtemperature = document.getElementById("max-temperature");
let positioin = document.getElementById("position");
let section = document.getElementById("section1");
// let main_container = document.getElementById("container");

const getData = async(city) => {
    let response = await fetch(URL+city,options);
    console.log(response);

    let data = await response.json();
    console.log(data); 

    text.innerHTML = data.temp+"°C"
    windspeed.innerHTML = data.wind_speed = "km/h";
    humidity.innerHTML = data.humidity;
    maxtemperature.innerHTML = data.max_temp;

    if(data.cloud_pct === 0){
        image.style.backgroundImage = "url('clear.svg')";
        image.style.backgroundRepeat = "no-repeat";
        positioin.innerHTML = "clear";
        section.style.display = "flex";
    }
    else if(data.colud_pct >= 1 || data.cloud_pct <= 30){
        image.style.backgroundImage = "url('cloudsun.svg')";
        image.style.backgroundRepeat = "no-repeat";
        positioin.innerHTML = "Mostly clear to partly cloudy";
        section.style.display = "flex";
    }
    else if(data.colud_pct >= 31 || data.cloud_pct <= 70){
        image.style.backgroundImage = "url('clear.svg')";
        image.style.backgroundRepeat = "no-repeat";
        positioin.innerHTML = "Partly cloudy to mostly cloudy";
        section.style.display = "block";
    }
    else if(data.colud_pct >= 71 || data.cloud_pct <= 100){
        image.style.backgroundImage = "url('cloud.svg')";
        image.style.backgroundRepeat = "no-repeat";
        positioin.innerHTML = "Overcast sky with complete cloud cover";
        section.style.display = "flex";
    }
}

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    getData(city.value);

    place.innerText = city.value;
    title.innerHTML= city.value;
})


