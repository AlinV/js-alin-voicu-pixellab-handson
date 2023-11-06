const { writeFileSync } = require('fs');
const args = process.argv.slice(2);

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

function calculateSquareArea(side) {
  return Math.pow(side, 2);
}

function calculateRectangleArea(length, width) {
  return length * width;
}

function fileLog(data) {
  writeFileSync('.log', data, function (error) {
    if (error) {
      console.error('Eroare la scrierea in fisierul .log');
    }
  });
}

if (args[0] === '-h') {
  console.log('Exemplu: cerc 10, patrat 10, dreptunghi 10 10');
} else if (args[0] === 'cerc' && args[1]) {
  const radius = args[1];
  if (!isNaN(radius)) {
    const area = calculateCircleArea(radius);
    console.log(area);
    fileLog(`Cerc, Raza: ${radius}, Suprafata: ${area}`);
  } else {
    console.error('Raza trebuie să fie un număr valid.');
  }
} else if (args[0] === 'patrat' && args[1]) {
  const side = args[1];
  if (!isNaN(side)) {
    const area = calculateSquareArea(side);
    console.log(area);
    fileLog(`Patrat, Latura: ${side}, Suprafata: ${area}`);
  } else {
    console.error('Latura trebuie să fie un număr valid.');
  }
} else if (args[0] === 'dreptunghi' && args[1] && args[2]) {
  const length = args[1];
  const width = args[2];
  if (!isNaN(length) && !isNaN(width)) {
    const area = calculateRectangleArea(length, width);
    console.log(area);
    fileLog(
      `Dreptunghi, Latime: ${width} Lungime: ${length}, Suprafata: ${area}`,
    );
  } else {
    console.error('Lungimea și lățimea trebuie să fie numere valide.');
  }
} else if (args[0] === '-clear') {
  fileLog('');
} else {
  console.error(
    "Comanda invalidă sau parametri insuficienți. Folosește 'node suprafete -h' pentru ajutor.",
  );
}
