

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
<<<<<<< HEAD
    try {
    thermostat.down();
    setDisplay();
  }
  catch(error) {
    var msg = error;
    if (msg === "Minimum temperature reached") {
      flash(error);
    }
=======
    thermostat.down();
    $('.temperature').text(thermostat.temperature);
  })

  function psmClassSetter(){
    return thermostat.isPowerSaving ? 'visible' : 'hidden'
>>>>>>> a123275954e494dd6cad69c59eabbb199ff6742c
  }
  })

  $('#PSM').click(function() {
    thermostat.togglePowerSave();
    setDisplay();
  });

<<<<<<< HEAD
  $('.reset').click(function() {
    thermostat.reset();
    setDisplay();
  });
=======

  $('#PSM').click(function() {
    thermostat.togglePowerSave();
    console.log(thermostat.isPowerSaving)
    $('#PSM-status').toggleClass(
      psmClassSetter()
    );
  });

  // for(var i=0; i < 100; i++)  {
  //   $('#message').fadeOut(200).fadeIn(200);
  // }
>>>>>>> a123275954e494dd6cad69c59eabbb199ff6742c

});
