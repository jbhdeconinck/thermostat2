'use strict';

describe("Thermostat", function() {

  var thermostat;
  var temperature;

  beforeEach(function(){
  thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.readTemperature()).toEqual(20);
  });

  describe("raiseTemperature", function() {

    it('Can increase temperature', function(){
      thermostat.up()
      expect(thermostat.readTemperature()).toEqual(21);
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

