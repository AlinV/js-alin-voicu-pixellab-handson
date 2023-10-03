const button = document.getElementById('clicker');
const removeButton = document.getElementById('removeEvent');
const inputAge = document.getElementById('query');
const paragraphElement = document.getElementById('message');

function clickHandler() {
  alert('Ai apasat butonul!');
}

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

inputAge.addEventListener('click', function () {
  const userAge = prompt('Introduceti varsta:');
  const message = `Ai ${userAge} de ani.`;
  console.log(message);
  showMessage(message);
});

function showMessage(message) {
  paragraphElement.innerText = message;
}
