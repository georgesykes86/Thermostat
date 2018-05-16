function Thermostat() {
  this.temperature = 20;
  this.minimum_temp = 10;
  this.isPowerSaving = true;
};

Thermostat.prototype.up = function(){
  this.temperature++;
}

Thermostat.prototype.down = function(){
  if (this.temperature === this.minimum_temp) {throw "Minimum temperature reached"}
  this.temperature--;
}

Thermostat.prototype.togglePowerSave = function(){
  this.isPowerSaving = !this.isPowerSaving
}
