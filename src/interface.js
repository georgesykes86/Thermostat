
$('document').ready(function() {
  var thermostat = new Thermostat();
  var geolocator = new Geolocator();
  var weatherAPI = new WeatherAPI(geolocator);
  var time = new Time

  function setDisplay(weatherJSON = null) {
    $('.temperature').text(thermostat.temperature);
    $('#PSM-status').attr('class', psmClassSetter() );
    $('.ebar').width(function(){
      var size = 50 + (150 * setEnergyBarSize())
      return size.toString() + 'px';
    });
    $('.ebar').css('background-color', setEnergyBarColor())
    if (weatherJSON) {
      var weatherDetails = weatherIcon[weatherJSON.weather]
      if (time.isDay()){ var icon = weatherDetails["Day icon"]}
      else {var icon = weatherDetails["Night icon"]}
      console.log(icon)
      $("#wi").removeClass().addClass('wi '+ icon)
      $(".location").html(weatherJSON.location)
      $(".loctemp").html(Math.round(weatherJSON.temp))
    }
    else {
      $("#wi").removeClass().addClass('wi '+ "wi-alien")
    }
  }


  weatherAPI.getWeather(setDisplay);
  console.log(weatherAPI)
  setDisplay()


  function flash(object) {
    $('#message').text(object);
    for(var i=0; i < 3; i++)  {
      $('#message').fadeOut(200).fadeIn(200).fadeOut(200);
    }
  }

  function psmClassSetter(){
    return thermostat.isPowerSaving ? 'visible' : 'hidden'
  }


  function setEnergyBarSize() {
    var barSize = (thermostat.temperature - thermostat.minimum_temp) / (thermostat.maximum_temp - thermostat.minimum_temp);
    return barSize;
  }

  function setEnergyBarColor() {
    if (thermostat.energyUsage() === "low-usage"){ return 'green'}
    else if (thermostat.energyUsage() === "medium-usage"){ return 'yellow'}
    else { return "red"}
  }


  $('#up').click( function() {
    try {
    thermostat.up();
    setDisplay();
  }
  catch(error) {
    var msg = error;
    if (msg === "Maximum temperature reached") {
      flash(error);
    }
  }
  })

  $('#down').click( function() {
    try {
    thermostat.down();
    setDisplay();
  }
  catch(error) {
    var msg = error;
    if (msg === "Minimum temperature reached") {
      flash(error);
    }
  }
  })

  $('#PSM').click(function() {
    thermostat.togglePowerSave();
    setDisplay();
  });

  $('.reset').click(function() {
    thermostat.reset();
    setDisplay();
  });

});
