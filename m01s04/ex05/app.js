var denominator = 7;
var lowerLimit = 49;
var upperLimit = 140;

for (var i = lowerLimit; i <= upperLimit; i++) {
  if (i % denominator === 0) {
    console.log('Numarul ' + i + ' este multiplu de ' + denominator + '.');
  }
}
