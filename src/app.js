function displayTemperature(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = temperature;

    let emojiElement = document.querySelector("#weather-emoji");
    emojiElement.innerHTML = `<img src="${response.data.condition.icon_url}" alt="${response.data.condition.description}" />`;

    let humidityElement=document.querySelector("#humidity-percentage");
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`;

    let windElement=document.querySelector("#current-speed-value");
    windElement.innerHTML=`${response.data.wind.speed}km/h`;

   let weatherElement=document.querySelector("#current-weather-description");
   console.log("Weather Description: ", response.data.condition.description);
   weatherElement.innerHTML=`${response.data.condition.description}`;
  
  }
  
  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#city-input");
    let city = searchInputElement.value;
  
    let apiKey = "182aec061b30d2o02f443tf58538a785";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(displayTemperature) .catch(error => console.error("Error fetching data:", error));
  }


  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }

  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);

  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);





