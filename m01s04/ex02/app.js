var userInput = prompt('Introdu un numar:');
var number = Number(userInput);
var errorMessage = 'Nu s-a introdus un numar.';
var limit = 20;
var messageA = `Numarul este egal cu ${limit}`;
var messageB = `Numarul este mai mare decat ${limit}`;
var messageC = `Numarul este mai mic decat ${limit}`;
var paragraphElement = document.getElementById('message');

if (isNaN(number) || userInput === null || userInput.trim() === '') {
  var message = errorMessage;

  paragraphElement.innerText = message;
} else if (number === limit) {
  var message = messageA;

  paragraphElement.innerText = message;
} else if (number > limit) {
  var message = messageB;

  paragraphElement.innerText = message;
} else {
  var message = messageC;

  paragraphElement.innerText = message;
}
