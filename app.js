/**Create a function that converts Celsius to Fahrenheit
 * 
 * Celsius to Fahrenheit formula:
 * F = C x 1.8 + 32
 * 
 * 
 * @example
 * 
 * convertCelsiusToFahrenheit(0) ->32
 * convertCelsiusToFahrenheit(10) ->50
 * convertCelsiusToFahrenheit(30) ->86
 */

const convertCelsiusToFahrenheit = (celsius) => {
 return celsius * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(0))
console.log(convertCelsiusToFahrenheit(10))
console.log(convertCelsiusToFahrenheit(30))