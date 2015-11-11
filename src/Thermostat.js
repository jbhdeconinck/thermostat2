'use strict';

function Thermostat(temperature) {
	if (temperature === undefined) {this.temperature = 20;}
	this.MINIMUM_TEMPERATURE = 10;
}

Thermostat.prototype.readTemperature = function() {
	return this.temperature;
};

Thermostat.prototype.up = function() {	
	this.temperature += 1;
};

Thermostat.prototype.down = function() {
	if (this.isAtMinimumTemperature()) {
		return this.MINIMUM_TEMPERATURE;
	}
		this.temperature -= 1;
};


Thermostat.prototype.isAtMinimumTemperature = function() {
	return this.temperature === this.MINIMUM_TEMPERATURE;
};