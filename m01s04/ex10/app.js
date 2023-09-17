var person = {
  name: 'Alin',
  surname: 'Voicu',
  age: 35,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],

  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },

    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },

    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

// Cerinta 1

person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(
      'Tehnologia ' +
        skill +
        ' se afla pe pozitia ' +
        index +
        ', impara, a arrayului.',
    );
  }
});

// Cerinta 2

person.skills.forEach(function (skill) {
  if (skill.includes('a')) {
    console.log('Tehnologia ' + skill + ' contine litera "a".');
  }
});

// Cerinta 3

var message = 'Prietenii mei se numesc ';

person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';

  if (friends.length - 1 === index) {
    punctuation = '.';
  }
  // scurtatura pentru message = message + ''
  message += friend.name + ' ' + friend.surname + punctuation;
});

console.log(message);

// Cerinta 4

var message = 'Varstele insumate sunt: ';
var sumYears = 0;

person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    sumYears += friend.age;
  }
});

console.log(message + sumYears + '.');

// Cerinta 5

var birthSum = 0;
var birthYear = 0;
person.friends.forEach(function (friend) {
  birthYear = new Date().getFullYear() - friend.age;
  if (friend.age % 2 !== 0) {
    birthSum += birthYear;
  }
});
console.log(birthSum.toString());

// Cerinta 6

// Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends,
// daca aceasta este mai mare sau egala cu 2 ani folosind propozitii de
// forma:  "Diferenta pentru ${name}:  xxx ani."

person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  var name = friend.name;

  if (ageDiff >= 2) {
    console.log(`Diferenta pentru ${name}: ${ageDiff} ani.`);
  }
});

// Cerinta 7

// Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "

var message = ``;

person.friends.forEach(function (friend, index, friends) {
  var ageDiff = person.age - friend.age;
  var punctuation = '. ';

  if (friends.length - 1 === index) {
    punctuation = '.';
  }
  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani${punctuation}`;
});

console.log(message);

// Cerinta 8

// Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.

person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

// Cerinta 9

// Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana ,
// folosind o propozitie de forma "{person.name} cunoaste xxx!"

person.skills.forEach(function (skill) {
  console.log(`${person.name} cunoaste ${skill}!`);
});

// Cerinta 10

// In mod similar, afiseaza skillurile care nu incep cu j in propozitii de forma "Numele tehnologiei xxx nu incepe cu litera j."

person.skills.forEach(function (skill) {
  var letter = 'j';
  if (!skill.toLowerCase().startsWith(letter))
    console.log(`Numele tehnologiei ${skill} nu incepe cu litera ${letter}.`);
});

// Cerinta 11

// Folosind forEach, afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."

var message = 'Numele mari ale prietenilor mei sunt ';

person.friends.forEach(function (friend, index, friends) {
  var surname = friend.surname;
  var punctuation = ', ';

  if (index === friends.length - 1) {
    punctuation = '.';
  }
  message += surname + punctuation;
});

console.log(message);

// Cerinta 12

// Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends

var ageSum = 0;

person.friends.forEach(function (friend) {
  ageSum += friend.age;
});
console.log(ageSum.toString());

// Cerinta 13

// Folosind forEach, afiseaza suma anilor de nastere a persoanelor

var birthYearSum = 0;
var currentDate = new Date().getFullYear();

person.friends.forEach(function (friend) {
  birthYearSum += currentDate - friend.age;
});

console.log(birthYearSum.toString());

// Cerinta 14

// Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.

person.friends.forEach(function (friend) {
  console.log(person.age - friend.age);
});

// Cerinta 15

// Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.

person.friends
  .slice()
  .reverse()
  .forEach(function (friend) {
    console.log(`${friend.name} ${friend.surname}`);
  });
