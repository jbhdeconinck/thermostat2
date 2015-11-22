$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').on('click', function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('.button-wrap').on("click", function(){
    $(this).toggleClass('button-active');
  });

  $('.powersaving-on').on('click', function(){
    thermostat.setPowerSavingModeOn();
    updateTemperature();
    $('#power-saving-status').text('on');
  });

  $('.powersaving-off').on('click', function(){
    thermostat.setPowerSavingModeOff();
    updateTemperature();
    $('#power-saving-status').text('off');
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class',thermostat.colour());
    $('#rectangle').width(thermostat.temperature * 19);
  }

  function kelvinToCelsius(num) {
    return Math.round((num - 273.15)*10)/10;
  }

  $('#provide-temperature').on('click', function getWeather() {

    var $city = $('#city-name');

    console.log("HELLO")
    var city = $city.val();
    var url = "http://api.openweathermap.org/data/2.5/weather";
    var token = "appID=e22a3f710a7344d463e468528767daac";
    var data = "q=" + city + "&" + token;

    $.getJSON(url, data, showTemperature);

    function showTemperature(resp) {
      var apiTemp = kelvinToCelsius(resp.main.temp);
      $("#city-temperature").text(apiTemp);
    }

  });

  $('#city-name').keypress(function(e){
        if(e.which == 13){
            $('#provide-temperature').click();
        }
    });

});
