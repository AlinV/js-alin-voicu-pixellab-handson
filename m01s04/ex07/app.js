var friends = [
  {
    name: 'Alin',
    surname: 'Voicu',
    friends: {},
  },

  {
    name: 'Larry',
    surname: 'Larryson',
    friends: {},
  },

  {
    name: 'Steven',
    surname: 'Stevenson',
    friends: {},
  },

  {
    name: 'Carol',
    surname: 'Carolson',
    friends: {},
  },

  {
    name: 'Andra',
    surname: 'Andrason',
    friends: {},
  },
];

// Cerinta 1

for (var i = 0; i < friends.length; i++) {
  console.log(friends[i].surname);
}

// Cerinta 2

for (var i = 0; i < friends.length; i++) {
  // var friend = friend[i];
  // var fullReverseName = friend.surname + ' ' + friend.name;

  // if (friend.name === 'Steven' && friend.surname === 'Stevenson') {
  //   console.log('M-am oprit la ' + fullReverseName + '.');

  //   break;
  // }

  // console.log(fullReverseName);

  var fullName = friends[i].surname + ' ' + friends[i].name;

  if (fullName !== 'Stevenson Steven') {
    console.log(fullName);
  } else {
    console.log(`M-am oprit la ${fullName}.`);
    break;
  }
}

// Cerinta 3

var minChar = 13;

for (var i = 0; i < friends.length; i++) {
  // var friend = friends[i];
  // var totalCharacters = (friend.surname + friend.name).length;

  // if (totalCharacters <= 13) {
  //   continue;
  // }

  // console.log(
  //   friend.surname + ' ' + friend.name + ' are mai mult de 13 caractere',
  // );

  var fullName = friends[i].surname + ' ' + friends[i].name;
  var nameLength = 0;

  for (var j = 0; j < fullName.length - 1; j++) {
    if (fullName.charAt(j) !== ' ') {
      nameLength++;
    }
  }

  if (nameLength > minChar) {
    console.log(fullName + ' are mai mult de 13 caractere.');
  }
}

for (var i = 0; i < friends.length; i++) {
  console.log(friends[i].name);
}

for (var i = 0; i < friends.length; i++) {
  var fullName = friends[i].name + ' ' + friends[i].surname;
  console.log(fullName);
}

var minChar = 9;
for (var i = 0; i < friends.length; i++) {
  var fullName = friends[i].surname + ' ' + friends[i].name;
  var nameLength = friends[i].surname.length;
  if (nameLength !== minChar) {
    console.log(fullName);
  } else {
    console.log('M-am oprit la ' + fullName);
    break;
  }
}
