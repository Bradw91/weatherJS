//initialize weather class
const storage = new Storage();
const weatherLocation = storage.getLocationData();


const weather = new Weather(weatherLocation.city,weatherLocation.country);
const ui = new UI();

//get stored location data

// weather.changeLocation('Raleigh','United States');
//get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);
//change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  weather.changeLocation(city,country);

  //get and display weather
  getWeather();
  //close modal, need to use Jquery since it is dependant of modal in bootstrap
  $('#locModal').modal('hide');
});

function getWeather(){
weather.getWeather()
.then(results => {
  ui.paint(results);
})
.catch(err => console.log(err));
}

