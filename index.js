const apiKey = "0d19e6423e3afaaf469cbf533388f109";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");

const weatherIcon = document.querySelector(".weather img");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)


    if( response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json()



        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h";
    
        if(data.weather[0].main == "clouds"){
            weatherIcon.src = "imgs/clouds.png";
        }
        else if(data.weather[0].main == "rain"){
            weatherIcon.src = "imgs/rain.png";
        }
        else if(data.weather[0].main == "snow"){
            weatherIcon.src = "imgs/snow.png";
        }
        
        else if(data.weather[0].main == "sun"){
            weatherIcon.src = "imgs/sun.png";
        }
        else if(data.weather[0].main == "wind"){
            weatherIcon.src = "imgs/wind.png";
        }
        else if(data.weather[0].main == "thermometer"){
            weatherIcon.src = "imgs/thermometer.png";
        }
        else if(data.weather[0].main == "Haze"){
            weatherIcon.src = "./imgs/haze.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
   

}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchInput.value);
})