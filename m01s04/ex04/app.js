var limitA = 32;
var limitB = 15;

for (var i = 1; i <= limitA; i++) {
  console.log('Numar pana la ' + limitA + ' inclusiv: ' + i + '.');
}

for (var i = 1; i < limitA; i++) {
  console.log('Numar pana la ' + limitA + ' exclusiv: ' + i + '.');
}

for (var i = 1; i <= limitA; i++) {
  console.log('Ma voi opri la ' + limitB + ': ' + i + '.');
  if (i === limitB) {
    console.log('M-am oprit la ' + i + '.');
    break;
  }
}

for (var i = 1; i <= limitA; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(
    'Toate numerele pare intre 1 si ' + limitA + ' inclusiv: ' + i + '.',
  );
}

var denominatorA = 5;

for (var i = 1; i <= limitA; i++) {
  if (i % denominatorA === 0) {
    console.log(
      'Toate numerele divizibile cu ' +
        denominatorA +
        ' pana la ' +
        limitA +
        ' inclusiv: ' +
        i +
        '.',
    );
  }
}

var limitC = 20;

for (var i = 1; i <= limitC; i++) {
  console.log('Numerele pana la ' + limitC + ' inclusiv: ' + i + '.');
}

for (var i = 1; i < limitC; i++) {
  console.log('Numerele pana la ' + limitC + ' exclusiv: ' + i + '.');
}

var limitD = 8;

for (var i = 1; i <= limitC; i++) {
  console.log('Numerele se vor opri la ' + limitD + ': ' + i + '.');

  if (i === limitD) {
    console.log('Numerele s-au oprit la ' + i + '.');
    break;
  }
}

for (var i = 1; i <= limitC; i++) {
  if (i % 2 !== 1) {
    continue;
  }

  console.log('Numerele impare pana la ' + limitC + ' inclusiv: ' + i + '.');
}

var denominatorB = 3;

for (var i = 1; i <= limitC; i++) {
  if (i % denominatorB === 0) {
    console.log(
      'Numerele divizibile cu ' +
        denominatorB +
        ' pana la ' +
        limitC +
        ' inclusiv: ' +
        i +
        '.',
    );
  }
}
