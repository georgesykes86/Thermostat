describe('Thermostat', function() {
  var thermostat
  beforeEach(function() {
    thermostat = new Thermostat()
  });

  it('should have a temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  describe('#Up', function(){
    it('Increases the temperature by one unit', function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('#Down', function(){
    it('Decreases the temperature by one unit', function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
  });
});
