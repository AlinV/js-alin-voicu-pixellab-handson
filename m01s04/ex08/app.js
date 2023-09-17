// Cerinta 1

var start1 = 1;

// Cerinta 2

var end1 = 18;

// Cerinta 3

var i = start1;

while (i <= end1) {
  console.log('Numar pana la 18 inclusiv: ' + i + '.');

  i++;
}

// Cerinta 4

var i = start1;
while (i <= end1) {
  if (i === 8) {
    console.log('M-am oprit la 8!');

    break;
  }
  console.log('Ma voi opri la 8: ' + i + '.');

  i++;
}

var start2 = 1;
var end2 = 29;
var i = start2;
while (i <= end2) {
  console.log(`Numerele pana la 29 inclusiv: ${i}.`);
  i++;
}

var i = start2;
while (i <= end2) {
  if (i === 15) {
    console.log('M-am oprit la 15!');

    break;
  }
  console.log('Ma voi opri la 15: ' + i + '.');

  i++;
}
