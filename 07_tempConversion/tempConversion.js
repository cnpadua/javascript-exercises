const convertToCelsius = function(temp) {
  let celciusTemp = (temp - 32) * (5/9);

  if (Number.isInteger(celciusTemp)){
    return +celciusTemp;
  } else {
    return +celciusTemp.toFixed(1);
  }
};

const convertToFahrenheit = function(temp) {
  let fahrenheitTemp = temp * (9/5) + 32;

  if (Number.isInteger(fahrenheitTemp)){
    return +fahrenheitTemp;
  } else {
    return +fahrenheitTemp.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
