var person = {
  name: 'Alin',
  surname: 'Voicu',
  age: 35,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
    node: false,
    firebase: false,
    AWS: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },

    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },

    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.log(Object.keys(person));
console.log(Object.keys(person.skills));

// Cerinta 1

// Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true.
// Folosind propozitii de forma: “person.name cunoaste: html.” “person.name cunoaste: javaScript.”

Object.keys(person.skills).forEach(function (skill) {
  if (person.skills[skill] === true) {
    console.log(`${person.name} cunoaste: ${skill}.`);
  }
});

// Cerinta 2

// Prin aceeasi metoda, afiseaza o lista inversata cu numele complet inversat al prietenilor.

var fullNameReverse = '';

Object.keys(person.friends)
  .reverse()
  .forEach(function (friend) {
    var friendPos = person.friends[friend];

    fullNameReverse = friendPos.surname + ' ' + friendPos.name;

    console.log(fullNameReverse);
  });

// Cerinta 3

// Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.keys()

var message = 'Prietenii mei sunt ';

Object.keys(person.friends).forEach(function (friend, index, friends) {
  var friendName = person.friends[friend].name;
  var punctuation = ', ';

  if (index === friends.length - 2) {
    punctuation = ' si ';
  }

  if (index === friends.length - 1) {
    punctuation = '.';
  }

  message += friendName + punctuation;
});
console.log(message);

// Cerinta 4

// Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze:
//  “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…

Object.keys(person.friends).forEach(function (friend) {
  var friendName = person.friends[friend].name;
  var ageDifference = person.age - person.friends[friend].age;

  console.log(
    `Diferenta de varsta intre ${friendName} si ${person.name} este de ${ageDifference} ani.`,
  );
});

// Cerinta 5

// Folosind Object.keys() pe proprietatea skills, afiseaza toate abilitatile din obiectul skills.

Object.keys(person.skills).forEach(function (skill) {
  console.log(skill);
});

// Cerinta 6

// Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.

Object.keys(person.friends).forEach(function (friend) {
  console.log(
    `${person.friends[friend].name} ${person.friends[friend].surname}`,
  );
});

console.warn(
  `Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()`,
);

var message = 'Prietenii mei sunt ';

Object.keys(person.friends).forEach(function (friendFullName, index, friends) {
  var friend = person.friends[friendFullName];
  var punctuation = ', ';

  if (index === friends.length - 2) {
    punctuation = ' si ';
  }

  if (index === friends.length - 1) {
    punctuation = '.';
  }

  message += `${friend.name} ${friend.surname}${punctuation}`;
});

console.log(message);

console.warn(
  `Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”`,
);

Object.keys(person.friends).forEach(function (frinedElement) {
  var friend = person.friends[frinedElement];

  console.log(`${friend.name} are ${friend.age} ani.`);
});
