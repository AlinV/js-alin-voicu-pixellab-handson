const image = document.querySelector('.image');

function showMessage(message) {
  const messageContainer = document.querySelector('p');
  messageContainer.innerText = message;

  // side effect
  document.body.append(messageContainer);
}

image.addEventListener('load', function () {
  showMessage('Imaginea s-a incarcat');
});

image.addEventListener('click', function (event) {
  alert(`Imaginea cu URLul: ${event.currentTarget.src} s-a incarcat`);
});
