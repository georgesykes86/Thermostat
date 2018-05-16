describe('Thermostat', function() {
  var thermostat
  beforeEach(function() {
    thermostat = new Thermostat()
  });

  it('should have a temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('should be on power saving mode', function() {
    expect(thermostat.isPowerSaving).toBe(true);
  });

  describe('#Up', function(){
    it('Increases the temperature by one unit', function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it('Throws an error when going above 25 in PSM', function(){
      for(var i = 0; i < 5; i++){
        thermostat.up();
      }
      expect(function() {thermostat.up()}).toThrow("Maximum temperature reached")
    });

    it('Doesn\'t throw an error when going above 25 not in PSM', function(){
      thermostat.togglePowerSave();
      for(var i = 0; i < 5; i++){
        thermostat.up();
      }
      expect(function() {thermostat.up()}).not.toThrow("Maximum temperature reached")
    });

    it('Throws and error when going above 32 when not in PSM', function(){
      thermostat.togglePowerSave();
      for(var i = 0; i < 12; i++){
        thermostat.up();
      }
      expect(function() {thermostat.up()}).toThrow("Maximum temperature reached")
    });
  });

  describe('#Down', function(){
    it('Decreases the temperature by one unit', function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
    it('Throws an error when trying to go below 10', function(){
      for(var i = 0; i < 10; i++){
        thermostat.down();
      }
      expect(function() {thermostat.down()}).toThrow("Minimum temperature reached")
    });
  });

  describe('#togglePowerSave', function(){
    it('switches power saving mode off', function() {
      thermostat.togglePowerSave()
      expect(thermostat.isPowerSaving).toBe(false)
    })
    it('switches power saving mode on', function() {
      thermostat.togglePowerSave()
      thermostat.togglePowerSave()
      expect(thermostat.isPowerSaving).toBe(true)
    })
  });
});
