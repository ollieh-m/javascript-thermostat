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
    expect(thermostat.temperature).toEqual(thermostat.RESET_DEFAULT + 1)
  });

  it("should decrease the temp when down button passed", function() {
    thermostat.downButton()
    expect(thermostat.temperature).toEqual(thermostat.RESET_DEFAULT - 1)
  });

  it("should not be able to lower the temp once min temp reached", function() {
    for (var t = 0; t < 12; t++){
      thermostat.downButton()
    }
    expect(thermostat.temperature).toEqual(thermostat.MINIMUM_TEMP)
  });

  describe("power saving", function() {
    it("should have a max temp of 25 degrees by default", function(){
      for (var t = 0; t < 12; t++){
        thermostat.upButton()
      }
      expect(thermostat.temperature).toEqual(thermostat.PSM_ON_MAX_TEMP)
    });

    it("should have a max temp of 32 degrees when power save mode is off",function(){
      thermostat.powerSaveButton()
      for (var t = 0; t < 15; t++){
        thermostat.upButton()
      }
      expect(thermostat.temperature).toEqual(thermostat.PSM_OFF_MAX_TEMPT)
    });

    it("should have a max temp of 25 degrees when power save mode is on",function(){
      thermostat.powerSaveButton()
      thermostat.powerSaveButton()
      for (var t = 0; t < 15; t++){
        thermostat.upButton()
      }
      expect(thermostat.temperature).toEqual(thermostat.PSM_ON_MAX_TEMP)
    });
  });

  it("should return the temp to 20 degrees when reset button is pressed", function(){
    thermostat.upButton()
    thermostat.upButton()
    thermostat.resetButton()
    expect(thermostat.temperature).toEqual(thermostat.RESET_DEFAULT)
  });

  describe("Display status", function() {
    it("shows low-usage when temp is less than 18 degrees", function() {
      for (var t = 0; t < 3; t++){
        thermostat.downButton()
      }
      expect(thermostat.displayStatus()).toEqual("low-usage")
    });

    it("shows med-usage when temp is less than 25 degrees but greater than 17 degrees", function() {
      expect(thermostat.displayStatus()).toEqual("med-usage")
    });

    it("shows high-usage when temp is more than 24 degrees", function() {
      for (var t = 0; t < 7; t++){
        thermostat.upButton()
      }
      expect(thermostat.displayStatus()).toEqual("high-usage")
    });
  });
});
