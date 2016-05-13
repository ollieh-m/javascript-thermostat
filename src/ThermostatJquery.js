var thermostat = new Thermostat();

$(document).ready(function() {

	function updateTemp() {
		$("h1#temperature").text(thermostat.temperature + " C");
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

	function weatherURL() {
		var city = $('#city').val();
		var country = $('#country').val();
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=05a7a6a98e00af8041cff6d5035a03ae&units=metric'
		return url;
	};

	function updateServer(){
		$.ajax({
			type: 'POST',
			url: 'http://localhost:4567/temperature',
			dataType: 'json',
			contentType: 'application/json',
			crossDomain: true,
			data: JSON.stringify({ temperature: thermostat.temperature })
		})
	}

	$.ajax({
			type: 'GET',
			url: 'http://localhost:4567/temperature',
			success: function(data){
				temp = JSON.parse(data);
				if (temp.temperature !== null) {
					thermostat.temperature = temp.temperature
				};
				updateTemp();
				updatePower();
				updateDisplay();
			}
		});

	$("#temperature-up").click(function() {
		thermostat.upButton();
		updateTemp();
		updateDisplay();
		updateServer();
	});

	$("#temperature-down").click(function() {
		thermostat.downButton();
		updateTemp();
		updateDisplay();
		updateServer();
	});

	$("#temperature-reset").click(function() {
		thermostat.resetButton();
		updateTemp();
		updateDisplay();
		updateServer();
	});

	$("#powersaving-button").click(function() {
		thermostat.powerSaveButton();
		updatePower();
	});

	$("#ajaxform").submit(function(event){
		event.preventDefault();
		$.get(weatherURL(), function(data){
			$('#weather-update').text("The temperature in " + data.name + " is " + data.main.temp + " C");
		});
	});
});