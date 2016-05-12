var thermostat = new Thermostat();

$(document).ready(function() {

	function updateTemp() {
		$("h1#temperature").text("The current temperature is " + thermostat.temperature + " degrees.");
	};

	function updatePower() {
		if (thermostat.powerSave) {
			$("h1#powersave").text("The current powersave mode is on.");
		} else {
			$("h1#powersave").text("The current powersave mode is off.");
		}
	};

	function updateDisplay() {
		$("#display").attr('class', thermostat.displayStatus());
	};

	updateTemp();
	updatePower();
	updateDisplay();

	$("#temperature-up").click(function() {
		thermostat.upButton();
		updateTemp();
		updateDisplay();
	});

	$("#temperature-down").click(function() {
		thermostat.downButton();
		updateTemp();
		updateDisplay();
	});

	$("#temperature-reset").click(function() {
		thermostat.resetButton();
		updateTemp();
		updateDisplay();
	});

	$("#powersaving-button").click(function() {
		thermostat.powerSaveButton();
		updatePower();
	});

});