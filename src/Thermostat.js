'use strict';

function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.upButton = function() {
  this.temperature += 1
}

Thermostat.prototype.downButton = function() {
  if (this.temperature > 10){
     this.temperature -= 1
  }
}