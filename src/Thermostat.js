'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSave = true;
  this.MINIMUM_TEMP = 10
  this.PSM_ON_MAX_TEMP = 25
  this.PSM_OFF_MAX_TEMPT = 32
  this.RESET_DEFAULT = 20
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

Thermostat.prototype.upButton = function() {
  if (this.powerSave === false) {
    if (this.temperature < this.PSM_OFF_MAX_TEMPT) {
      this.temperature += 1
    }
  } else {
    if (this.temperature < this.PSM_ON_MAX_TEMP) {
      this.temperature += 1
    }
  }
}
Thermostat.prototype.downButton = function() {
  if (this.temperature > this.MINIMUM_TEMP){
   this.temperature -= 1
 }
}

Thermostat.prototype.powerSaveButton = function() {
  this.powerSave = !(this.powerSave)
}

Thermostat.prototype.resetButton = function() {
  this.temperature = this.RESET_DEFAULT
}

Thermostat.prototype.displayStatus = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
    return "low-usage"
  } else if (this.temperature < this.PSM_ON_MAX_TEMP) {
    return "med-usage"
  } else {
    return "high-usage"
  }
}