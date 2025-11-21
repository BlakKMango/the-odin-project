const convertToCelsius = function(farenheitValue) {
  const valueInC = (farenheitValue - 32) * (5 / 9)
  let result = parseFloat(valueInC.toFixed(1))
  return result
};

const convertToFahrenheit = function(celciusValue) {
  const valueInF = (celciusValue * 9/5) + 32
  let result = parseFloat(valueInF.toFixed(1))
  return result
};



convertToCelsius(32)
convertToCelsius(100)
convertToCelsius(-100)

convertToFahrenheit(0)
convertToFahrenheit(73.2)
convertToFahrenheit(-10)


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
