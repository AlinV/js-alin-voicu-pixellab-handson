const controls = document.querySelector('.controls');
const firstBox = document.getElementById('box-1');
const secondBox = document.getElementById('box-2');
const thirdBox = document.getElementById('box-3');
let box = document.querySelectorAll('.box');
const colorInput = controls.querySelector('.color-input');
colorInput.placeholder = 'Type a hex value and press Enter';
const resetButton = controls.querySelector('.reset-button');

// event delegation
controls.addEventListener('click', function (event) {
  // event.target = elementul de pe care a plecat clickul
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.dataset.color ||
    target.dataset.color.trim().length <= 0
  ) {
    return;
  }

  const button = target;
  const color = button.dataset.color;
  if (firstBox.checked) {
    firstBox.parentElement.style.backgroundColor = color;
  } else if (secondBox.checked) {
    secondBox.parentElement.style.backgroundColor = color;
  } else if (thirdBox.checked) {
    thirdBox.parentElement.style.backgroundColor = color;
  }
});

colorInput.addEventListener('keydown', function (event) {
  // dom traversal
  const input = event.currentTarget;
  const button = input.previousElementSibling;
  const value = input.value;
  input.placeholder = 'Type a hex value and press Enter';

  if (/^#?([a-f0-9]{6}|[a-f0-9]{3})$/.test(value) && event.key === 'Enter') {
    button.dataset.color = value;
    button.style.backgroundColor = value;
    input.value = '';
  } else if (event.key === 'Enter') {
    input.placeholder = 'Wrong hex value typed';
    input.value = '';
  }
});

resetButton.addEventListener('click', function () {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(function (box) {
    box.removeAttribute('style');
  });
});
