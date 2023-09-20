var person = {
  firstName: 'Alin',
  lastName: 'Voicu',
  birthYear: 1988,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 5,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

// Cerinta 2

// Afiseaza in consola folosind metoda forEach() numele fiecarui animal.

person.pets.forEach(function (pet) {
  console.log(pet.name);
});

// Cerinta 3

// Folosind o bucla for afiseaza suma anilor animalelor.

var petAgeSum = 0;

for (i = 0; i < person.pets.length; i++) {
  petAgeSum += person.pets[i].age;
}
console.log(petAgeSum);

// Cerinta 4

// Folosind forEach(), afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.

person.pets.forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

// Cerinta 5

// Folosind o bucla for, afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o
// diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).

for (i = 0; i < person.pets.length; i++) {
  var petElement = person.pets[i];
  var personAge = new Date().getFullYear() - person.birthYear;
  var ageDiff = personAge - petElement.age;

  console.log(
    `Intre ${person.firstName} si ${petElement.name} este o diferenta de ${ageDiff} ani.`,
  );
}

// Cerinta 6

// Folosind o bucla for, afiseaza in ordine inversa numele animalelor din array
// sub forma de propozitii: “Animalul meu se numeste xxxx.”.

for (i = person.pets.length - 1; i >= 0; i--) {
  var petName = person.pets[i].name;

  console.log(`Animalul meu se numeste ${petName}.`);
}

// Cerinta 7

// Folosind o bucla for, afla care este cel mai in varsta animal si afiseaza propozitia:
// “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”
// Salveaza primul pet intr-o variabila numita oldestPet si porneste bucla, daca varsta animalului
// curent din bucla este mai mare decat oldestPet.age, atunci oldestPet devine animalul curent.

var oldestPet = 0;
var nameOldestPet = '';

for (i = 0; i < person.pets.length; i++) {
  var petName = person.pets[i].name;

  if (oldestPet < person.pets[i].age) {
    oldestPet = person.pets[i].age;

    nameOldestPet = person.pets[i].name;
  }

  var ageDiff = new Date().getFullYear() - person.birthYear - oldestPet;
}

console.log(
  `${nameOldestPet} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

// Cerinta 8

// Folosind o bucla forEach, afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.

var message = 'Am ';

person.pets.forEach(function (pet, index, pets) {
  var punctuation = ', ';
  var species = pet.species;

  if (index === pets.length - 2) {
    punctuation = ' si ';
  }

  if (index === pets.length - 1) {
    punctuation = '.';
  }

  message += species + punctuation;
});

console.log(message);
