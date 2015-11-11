'use strict';

describe("Thermostat", function() {

  var thermostat;
  var temperature;
  var powerSavingMode;

  beforeEach(function(){
  thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.readTemperature()).toEqual(20);
  });

  it('Power-saving mode is on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('Can switch power-saving mode off', function(){
    thermostat.setPowerSavingModeOff()
    expect(thermostat.isPowerSavingModeOn()).toBe(false)
  });

  it('Max temperature is 32 degrees if power saving mode is off', function(){
    thermostat.setPowerSavingModeOff()
    for (var i=0; i<13; i++) {
    thermostat.up();}
    expect(thermostat.readTemperature()).toEqual(32);
  });

  describe("raiseTemperature", function() {

    it('Can increase temperature', function(){
      thermostat.up()
      expect(thermostat.readTemperature()).toEqual(21);
    });

    it('Max temperature is 25 degrees if power saving mode is on', function(){
      for (var i=0; i<6; i++) {
      thermostat.up();}
      expect(thermostat.readTemperature()).toEqual(25);
    });

  });

  describe("lowerTemperature", function() {

    it('Can decrease temperature', function(){
      thermostat.down()
      expect(thermostat.readTemperature()).toEqual(19);
    });

    it('Set minimum temperature at 10 degrees', function(){
      for(var i=0; i<11; i++) {  
      thermostat.down();}
      expect(thermostat.readTemperature()).toEqual(10);
    });

  });

});

