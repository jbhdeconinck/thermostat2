'use strict';

function Thermostat(temperature) {
	if (temperature === undefined) {this.temperature = 20;}
	this.MINIMUM_TEMPERATURE = 10;
	this.powerSavingMode = true;
	this.MAXIMUM_TEMP_IF_PSM_ON = 25;
	this.MAXIMUM_TEMP_IF_PSM_OFF = 32;
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

Thermostat.prototype.setPowerSavingModeOff = function() {
	return this.powerSavingMode = false;
};

Thermostat.prototype.setPowerSavingModeOn = function() {
	return this.powerSavingMode = true;
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
