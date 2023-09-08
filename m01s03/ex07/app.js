var person = {
  firstName: 'Alin',
  lastName: 'Voicu',
  email: 'js@gmail.com',
  birthYear: 1921,
  pets: [
    {
      name: 'Oscar',
      species: 'Jack Russel Terrier',
      age: 8,
    },
    {
      name: 'Isis',
      species: 'Caniche',
      age: 2,
    },
    {
      name: 'Vasilica',
      species: 'Buldog',
      age: 5,
    },
  ],
  zipCode: '222000',
};

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.log((2023 - person.pets[2].age).toString());

var difference = 2023 - person.birthYear - person.pets[0].age;

console.log(difference.toString());

var petName = person.pets[0].name;

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

var prop01Element = document.getElementById('prop01');
prop01Element.innerText =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa';

var prop02Element = document.getElementById('prop02');
prop02Element.innerText = person.pets[0].age - person.pets[2].age;

var prop03Element = document.getElementById('prop03');
prop03Element.innerText =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode;

var prop04Element = document.getElementById('prop04');
prop04Element.innerText =
  'Animalele mele s-au nascut in ' +
  (2023 - person.pets[0].age) +
  ', ' +
  (2023 - person.pets[1].age) +
  ', ' +
  (2023 - person.pets[2].age) +
  '.';
