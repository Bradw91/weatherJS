class Weather {
  constructor(city,country,language){
    this.apiKey = 'a09f8dea4b783de3ef4c169cd58bea6a';
    this.city = city;
    this.country = country;
    this.language = language;

  }
  //fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}}&APPID=${this.apiKey}&lang=${this.language}&units=metric`)
    const responseData = await response.json();
    return responseData; //returns as a promise! need to .then .catch on getWeather call
  }
  changeLocation(city,country){
    this.city = city;
    this.country = country; 
  }
}


