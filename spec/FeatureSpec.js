'use strict';

describe('Feature Test', function(){
	var thermostat;

	beforeEach(function(){
	thermostat = new Thermostat();
	});

	// Thermostat starts at 20 degrees

	it('starts at 20 degrees', function(){
		expect(thermostat.readTemperature()).toEqual(20);

	});

	// You can increase the temperature with the up button

	it('Can increase temperature (by one degree at a time)', function(){
		thermostat.up()
		expect(thermostat.readTemperature()).toEqual(21);
	});

	// You can decrease the temperature with the down button

	it('Can decrease temperature (by one degree at a time)', function(){
      thermostat.down()
      expect(thermostat.readTemperature()).toEqual(19);
    });

    // The minimum temperature is 10 degrees

    it('Set minimum temperature at 10 degrees', function(){
      for (var i=0; i<11; i++) {	
      thermostat.down();}
      expect(thermostat.readTemperature()).toEqual(10);
    });

    // If power saving mode is on, the maximum temperature is 25 degrees

    it('Checking power-saving mode is on by default', function(){
    	expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

     it('Max temperature is 25 degrees if power saving mode is on', function(){
     	for (var i=0; i<6; i++) {
     	thermostat.up();}
    	expect(thermostat.readTemperature()).toEqual(25);
    });

});