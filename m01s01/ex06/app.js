var inputRadius = document.getElementById('radius');
var spanResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',

  function (event) {
    event.preventDefault();

    var radius = inputRadius.value || 0;
    var result = 4 * Math.PI * Math.pow(radius, 2);

    spanResult.innerText = result;
  },
  false,
);
