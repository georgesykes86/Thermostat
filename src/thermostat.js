function Thermostat() {
  this.temperature = 20;
  this.minimum_temp = 10;
  this.maximum_temp = 32;
  this.isPowerSaving = true;
};

Thermostat.prototype.up = function(){
  if (this.temperature === this._maxTemp()) {throw "Maximum temperature reached"}
  this.temperature++;
}

Thermostat.prototype.down = function(){
  if (this.temperature === this.minimum_temp) {throw "Minimum temperature reached"}
  this.temperature--;
}

Thermostat.prototype.togglePowerSave = function(){
  this.isPowerSaving = !this.isPowerSaving
  this._maxTempCheck();
}

Thermostat.prototype._maxTempCheck = function(){
  if (this.isPowerSaving && this.temperature > this._maxTemp() ){ this.temperature = this._maxTemp() }
}

Thermostat.prototype._maxTemp = function(){
  return this.isPowerSaving ? 25 : 32
}

Thermostat.prototype.reset = function(){
  this.temperature = 20;
  this.isPowerSaving = true;
}

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < 18) {return "low-usage"
  } else if (this.temperature < 25) {return "medium-usage"
  } else {return "high-usage"}
}
