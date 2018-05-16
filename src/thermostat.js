function Thermostat() {
  this.temperature = 20;
  this.minimum_temp = 10;
  this.isPowerSaving = true;
};

Thermostat.prototype.up = function(){
  if (this.temperature === this.maxTemp()) {throw "Maximum temperature reached"}
  this.temperature++;
}

Thermostat.prototype.down = function(){
  if (this.temperature === this.minimum_temp) {throw "Minimum temperature reached"}
  this.temperature--;
}

Thermostat.prototype.togglePowerSave = function(){
  this.isPowerSaving = !this.isPowerSaving
}

Thermostat.prototype.maxTemp = function(){
  return this.isPowerSaving ? 25 : 32
}

Thermostat.prototype.reset = function(){
  this.temperature = 20
}

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < 18) {return "low-usage"
  } else if (this.temperature < 25) {return "medium-usage"
  } else {return "high-usage"}  
}
