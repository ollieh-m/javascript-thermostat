'use strict';

describe("Thermostat", function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a starting temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it("should increase the temp when up button passed", function() {
    thermostat.upButton()
    expect(thermostat.temperature).toEqual(21)
  });

  it("should decrease the temp when down button passed", function() {
    thermostat.downButton()
    expect(thermostat.temperature).toEqual(19)
  });

  it("should not be able to lower the temp once min temp reached", function() {
    for (var t = 0; t < 12; t++){
      thermostat.downButton()
    }
    expect(thermostat.temperature).toEqual(10)
  });

});
