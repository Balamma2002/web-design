function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var inputUnit = document.getElementById('inputUnit').value;
    var outputUnit = document.getElementById('outputUnit').value;
    var outputTemp = document.getElementById('outputTemp');
  
    if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
      var result = (inputTemp * 9/5) + 32;
      outputTemp.value = result.toFixed(2) + ' °F';
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
      var result = (inputTemp - 32) * 5/9;
      outputTemp.value = result.toFixed(2) + ' °C';
    } else {
      outputTemp.value = 'Invalid conversion';
    }
  }
  