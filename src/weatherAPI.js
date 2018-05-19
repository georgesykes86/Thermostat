function WeatherAPI(geolocator = new Geolocator, location = {lat: 51 , lon: 0 }){
  this.geolocator = geolocator
  this.weatherURL = "http://api.openweathermap.org/data/2.5/weather"
  this.APPID = tbc
}

WeatherAPI.prototype.getWeather = function(callback){
  var weatherAPI = this;
  this.geolocator.getLocation(function(){weatherAPI._getData(callback)})
}

WeatherAPI.prototype._getData = function(callback) {
  console.log("This is:" + this )
  console.log(this.geolocator)
  console.log("getting Data")
  $.ajax({
    url: this.weatherURL,
    data: {
        id: 524901,
        appid: this.APPID,
        lat: this.geolocator.position.lat,
        lon: this.geolocator.position.lon
    },
    type: "GET",
    dataType : "json",
  })
  .done(function( json ) {
    console.log(json)
    var weatherJSON = {
      weather: json.weather[0].id.toString(),
      location: json.name,
      temp: (json.main.temp - 273.15)
    }
    callback(weatherJSON);
  })
  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
    return null
  })

}
