

$('document').ready(function() {

  var thermostat = new Thermostat();

  function flash(object) {
    $('#message').text(object);
    for(var i=0; i < 3; i++)  {
      $('#message').fadeOut(200).fadeIn(200).fadeOut(200);
    }
  }

  function psmClassSetter(){
    return thermostat.isPowerSaving ? 'visible' : 'hidden'
  }

  function setDisplay() {
    $('.temperature').text(thermostat.temperature);
    $('#PSM-status').attr('class', psmClassSetter() );
    $('.ebar').width(function(){
      var size = 50 + (150 * setEnergyBarSize())
      return size.toString() + 'px';
    });
    $('.ebar').css('background-color', setEnergyBarColor())
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

  setDisplay();

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
