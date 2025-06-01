document.addEventListener('DOMContentLoaded',()=>{

    const cityInput= document.getElementById("city-input")
    const getWeatherButton= document.getElementById("get-weather-btn")
    const weatherInfo =  document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("city-name")
    const descriptionDisplay = document.getElementById("description")
    const temperatureDisplay = document.getElementById("temperature")
    const errorMessage = document.getElementById("error-message")
    
    const API_KEY = "05c5d37ac299116acea899ff5d20383c"
    
    getWeatherButton.addEventListener('click',async ()=>{
        const requested_city = cityInput.value
        if(requested_city ==="") return;


        //> rules of web request
            //- Server may throw a error
            //- Server is in another continent
            
        //> use try-catch to follow the rule

        try {
            const weatherData = await fetchWeatherData(requested_city)
            displayWeatherData(weatherData);
        } catch (error) {
            showError()
        }


    })

    async function fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        const response =  await fetch(url);
        if(response.ok ==false){
            throw new Error("City not found")
        }
        console.log(typeof response, response)
        const data = await response.json()
        return data;
    }

    function displayWeatherData(data){
        console.log(data)
         weatherInfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')
        const {name, main, weather} = data;
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent =`Temperature: ${main.temp}C`
        descriptionDisplay.textContent = `${weather[0].description}`
       

    }
    
    function showError(){
        weatherInfo.classList.add('hidden')
        errorMessage.classList.remove('hidden')
    }
})  

/* to learn
1. fetch
2. response object

*/