class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    
  }
  paint(weather){
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${Math.round(weather.main.temp)} C`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relavite humidity: ${weather.main.humidity}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.wind.textContent = `Wind: ${weather.wind.speed} km/h`;

  }
}