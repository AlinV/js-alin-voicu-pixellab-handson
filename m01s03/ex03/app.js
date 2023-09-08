var person = {
  name: 'Alin',
  surname: 'Voicu',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

person.friends.larry = larry;
person.friends.steven = steven;
person.friends.andra = andra;

larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

steven.friends.larry = larry;
steven.friends.andra = andra;
larry.friends.steven = steven;
andra.friends.steven = steven;

andra.friends.carol = carol;
carol.friends.andra = andra;

delete person.friends.larry;
delete larry.friends.person;

console.log(larry.friends.steven.friends.person.name + ' ' + person.surname);
console.log(
  person.friends.steven.friends.larry.name +
    ' ' +
    person.friends.steven.friends.larry.surname,
);

console.log(
  carol.friends.andra.friends.person.name.split('').reverse().join(''),
);

console.log(
  (andra.friends.person.name + andra.friends.person.surname).length.toString(),
);
