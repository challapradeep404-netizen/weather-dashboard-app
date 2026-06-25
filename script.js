const apiKey = "YOUR_API_KEY";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

const errorMessage = document.getElementById("errorMessage");

async function getWeather(city){

    try{

        errorMessage.textContent = "";

        const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        cityName.textContent = data.name;

        temperature.textContent =
        data.main.temp;

        humidity.textContent =
        data.main.humidity;

        windSpeed.textContent =
        data.wind.speed;

    }

    catch(error){

        errorMessage.textContent =
        error.message;

        cityName.textContent = "N/A";
        temperature.textContent = "--";
        humidity.textContent = "--";
        windSpeed.textContent = "--";

    }

}

searchBtn.addEventListener(
    "click",
    () => {

        const city =
        cityInput.value.trim();

        if(city !== ""){
            getWeather(city);
        }

    }
);

cityInput.addEventListener(
    "keypress",
    (event) => {

        if(event.key === "Enter"){

            const city =
            cityInput.value.trim();

            if(city !== ""){
                getWeather(city);
            }

        }

    }
);
