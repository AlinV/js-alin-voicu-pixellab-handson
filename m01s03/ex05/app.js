var person = {
  name: 'Alin',
  surname: 'Voicu',
  age: 35,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
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

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si stiu ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.log(
  'Sunt ' +
    person.name +
    ' si acum invat ' +
    person.skills[1].charAt(0).toUpperCase() +
    person.skills[1].slice(1, 4) +
    person.skills[1].charAt(4).toUpperCase() +
    person.skills[1].slice(5) +
    '.',
);

console.log(
  'Am ' +
    person.friends.length.toString() +
    ' prieteni: ' +
    person.friends[0].name +
    ', ' +
    person.friends[1].name +
    ' si ' +
    person.friends[2].name +
    '.',
);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si vreau sa invat ' +
    person.skills[1] +
    '.',
);

console.log(
  'Sunt ' +
    person.name +
    ' si stiu ' +
    person.skills[0].toUpperCase() +
    ' si ' +
    person.skills[2].toUpperCase() +
    '.',
);

console.log(
  'Am ' +
    person.friends.length.toString() +
    ' prieteni: ' +
    person.friends[0].surname +
    ', ' +
    person.friends[1].surname +
    ' si ' +
    person.friends[2].surname +
    '.',
);

console.log(
  'Numele meu este ' +
    person.name +
    ' ' +
    person.surname +
    ', am ' +
    person.age +
    ' ani si ' +
    person.friends.length.toString() +
    ' prieteni.',
);
