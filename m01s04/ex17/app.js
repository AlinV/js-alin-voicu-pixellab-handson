var services = [
  {
    name: 'Mailchimp',
    adoption: 2010,
  },

  {
    name: 'Google Analytics',
    adoption: 2009,
  },

  {
    name: 'Stripe',
    adoption: 2020,
  },

  {
    name: 'Hotjar',
    adoption: 2021,
  },

  {
    name: 'Sendgrid',
    adoption: 2022,
  },
];

console.warn(
  `Afiseaza in consola propozitia “Siteul foloseste urmatoarele servicii: a, b, c, d si e.”`,
);

var message = 'Siteul foloseste urmatoarele servicii: ';

for (var i = 0; i < services.length; i++) {
  var punctuation = ', ';

  if (i === services.length - 2) {
    punctuation = ' si ';
  }

  if (i === services.length - 1) {
    punctuation = '.';
  }

  message += services[i].name + punctuation;
}
console.log(message);

console.warn(`Afiseaza doar numele serviciilor integrate dupa 2020 intr-o propozitie de forma
 “Serviciile a, b, c au fost adoptate dupa 2020 inclusiv.”`);

var message = '';
for (var i = 0; i < services.length; i++) {
  var punctuation = ', ';

  if (services[i].adoption >= 2020) {
    if (i === services.length - 1) {
      punctuation = '';
    }
    message += services[i].name + punctuation;
  }
}
console.log(`Serviciile ${message} au fost adoptate dupa 2020 inclusiv.`);

console.warn(
  `Afiseaza doar pentru serviciile de pe pozitii pare, cate una pe linie,
  propozitii de forma “Serviciul se numeste xxx si a fost integrat in yyyy.”`,
);

for (i = 0; i < services.length; i++) {
  if (i % 2 === 0) {
    console.log(
      `Serviciul se numeste ${services[i].name} si a fost integrat in ${services[i].adoption}.`,
    );
  }
}

console.warn(
  `Folosind anul curent afiseaza propozitii de forma “Siteul foloseste serviciul xxx de yyy ani.”`,
);

for (var i = 0; i < services.length; i++) {
  var adoptionYears = new Date().getFullYear() - services[i].adoption;

  console.log(
    `Siteul foloseste serviciul ${services[i].name} de ${adoptionYears} ani.`,
  );
}

console.warn(
  `Gaseste cel mai vechi serviciu si afiseaza o propozitie de forma “Folosim xxx de yyy ani.”`,
);

var oldProduct = '';
var nrYears = 0;
var min = services[0].adoption;
for (var i = 0; i < services.length; i++) {
  if (min > services[i].adoption) {
    min = services[i].adoption;
    oldProduct = services[i].name;
  }
}
nrYears = new Date().getFullYear() - min;
console.log(`Folosim ${oldProduct} de ${nrYears} ani.`);
