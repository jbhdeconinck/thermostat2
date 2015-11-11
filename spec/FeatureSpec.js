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

});