

$('document').ready(function() {

  var thermostat = new Thermostat();

  $('.temperature').text(thermostat.temperature);
  $('#PSM-status').toggleClass( psmClassSetter() );

  $('#up').click( function() {
    thermostat.up();
    $('.temperature').text(thermostat.temperature);
  })

  $('#down').click( function() {
    thermostat.down();
    $('.temperature').text(thermostat.temperature);
  })

  function psmClassSetter(){
    return thermostat.isPowerSaving ? 'visible' : 'hidden'
  }


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

});
