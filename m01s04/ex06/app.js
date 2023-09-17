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

for (var i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(
      person.skills[i] + ' se afla pe indexul ' + i + ' al arrayului.',
    );
  }
}

// Cerinta 2

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];
  var letter = 'j';

  // if(!skill.toLocaleLowerCase().startsWith(letter))s

  if (skill.charAt(0).toLowerCase() !== letter) {
    console.log('Tehnologia ' + skill + ' nu incepe cu ' + letter + '!');
  }
}

// Cerinta 3

var friendNames = '';
var message = 'Prietenii mei se numesc: ';

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i].name + ' ' + person.friends[i].surname;

  friendNames += friend;

  if (i < person.friends.length - 1) {
    friendNames += ', ';
  }
}

console.log(message + friendNames + '.');

// Cerinta 4

var ageRequired = 30;
var message =
  'Suma varstelor persoanelor peste ' + ageRequired + ' de ani este: ';
var sum = 0;

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  if (friend.age >= ageRequired) {
    sum += friend.age;
  }
}
console.log(message + sum + '.');

// Cerinta 5

var currentYear = new Date().getFullYear();
var sumBirthYears = 0;

for (var i = 0; i < person.friends.length; i++) {
  var birthYear = currentYear - person.friends[i].age;
  sumBirthYears += birthYear;

  console.log('Suma anilor de nastere este: ' + sumBirthYears + '.');
}

// Cerinta 6

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDifference = person.age - friend.age;
  var yearsRequired = 2;

  if (ageDifference > yearsRequired) {
    console.log(
      `Diferenta de varsta mai mare de ${yearsRequired} ani este ${ageDifference}.`,
    );
  }
}

// Cerinta 7

var message = '';

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDifference = person.age - friend.age;

  if (friend.age % 2 === 1) {
    message +=
      'Intre ' +
      person.name +
      ' si ' +
      friend.name +
      ' este o diferenta de ' +
      ageDifference +
      ' ani.';

    if (i < person.friends.length - 1) {
      message += ' ';
    }
  }
}

// console.log(message.trim());

console.log(message);

// Cerinta 8

for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

// Cerinta 9

for (var i = 0; i < person.skills.length; i++) {
  var skillLength = person.skills[i].length;

  console.log(
    'Tehnologia ' + person.skills[i] + ' are ' + skillLength + ' caractere.',
  );
}

for (var i = 0; i < person.skills.length; i++) {
  var letterC = 'c';
  var skillWithC = person.skills[i];

  if (skillWithC.charAt(0).toLowerCase() === letterC) {
    console.log(
      'Tehnologia ' + skillWithC + ' incepe cu litera ' + '"' + letterC + '".',
    );
  }
}

var friendSurnames = '';

for (var i = 0; i < person.friends.length; i++) {
  var friendSurname = person.friends[i].surname;

  friendSurnames += friendSurname;

  if (i < person.friends.length - 1) {
    friendSurnames += ', ';
  }
}
console.log(
  'Numele de familie ale prietenilor mei sunt: ' + friendSurnames + '.',
);

var friendsTotalAge = 0;

for (var i = 0; i < person.friends.length; i++) {
  friendsTotalAge += person.friends[i].age;
}
console.log(friendsTotalAge.toString());

for (var i = 0; i < person.friends.length; i++) {
  var ageDiff = person.age - person.friends[i].age;

  console.log('Diferenta de varsta este: ' + ageDiff + '.');
}

var agePersonFriend = '';

for (var i = 0; i < person.friends.length; i++) {
  var ageDiff = person.age - person.friends[i].age;

  agePersonFriend += `Intre ${person.name} si ${person.friends[i].name} este o diferenta de ${ageDiff} ani.`;

  if (i < person.friends.length - 1) {
    agePersonFriend += ' ';
  }
}

console.log(agePersonFriend);

var friendsFullName = '';

for (var i = person.friends.length - 1; i >= 0; i--) {
  var friendFullName = person.friends[i].name + ' ' + person.friends[i].surname;

  friendsFullName += friendFullName;

  if (i < person.friends.length && i > 0) {
    friendsFullName += ', ';
  }
}
console.log(`Prietenii mei sunt: ${friendsFullName}.`);
