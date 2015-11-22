'use strict';

function Thermostat(temperature) {
	this.DEFAULT_TEMPERATURE = 20;
	this.temperature = this.DEFAULT_TEMPERATURE;
	this.MINIMUM_TEMPERATURE = 10;
	this.powerSavingMode = true;
	this.MAXIMUM_TEMP_IF_PSM_ON = 25;
	this.MAXIMUM_TEMP_IF_PSM_OFF = 32;
	this.MEDIUM_ENERGY_USAGE_TEMP = 18;
}

Thermostat.prototype.readTemperature = function() {
	return this.temperature;
};

Thermostat.prototype.up = function() {
	if (this.isPowerSavingModeOn() && this.isAtMaximumTempIfPsmOn()) {
		return this.MAXIMUM_TEMP_IF_PSM_ON;
	};
	if (!this.isPowerSavingModeOn() && this.isAtMaximumTempIfPsmOff()) {
		return this.MAXIMUM_TEMP_IF_PSM_OFF;
	};
	this.temperature += 1;
};

Thermostat.prototype.down = function() {
	if (this.isAtMinimumTemperature()) {
		return this.MINIMUM_TEMPERATURE;
	}
	this.temperature -= 1;
};

Thermostat.prototype.resetTemperature = function() {
	this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.setPowerSavingModeOff = function() {
	this.powerSavingMode = false;
};

Thermostat.prototype.setPowerSavingModeOn = function() {
	this.powerSavingMode = true;
	if (this.temperature >= this.MAXIMUM_TEMP_IF_PSM_ON) {this.resetTemperature();}
};

Thermostat.prototype.isAtMinimumTemperature = function() {
	return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
	return this.powerSavingMode === true;
};

Thermostat.prototype.isAtMaximumTempIfPsmOn = function() {
	return this.temperature === this.MAXIMUM_TEMP_IF_PSM_ON;
};

Thermostat.prototype.isAtMaximumTempIfPsmOff = function() {
	return this.temperature === this.MAXIMUM_TEMP_IF_PSM_OFF;
};

Thermostat.prototype.colour = function() {
	if (this.temperature < this.MEDIUM_ENERGY_USAGE_TEMP) { return "green";};
	if (this.temperature >= this.MAXIMUM_TEMP_IF_PSM_ON) { return "red";};
	return "yellow"
};
