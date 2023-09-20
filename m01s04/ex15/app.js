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
      age: 25,
    },

    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 33,
    },

    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

// Folosind fisierele de la exercitiul 06 si doua bucle for imbricate (nested),
// afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
// Poti folosi metoda pentru a converti numerele negative in pozitive.

// Exemplu:
// Intre Larry si Steven este o diferenta de x ani.
// Intre Larry si Carol este o diferenta de x ani.
// Intre Steven si Larry este o diferenta de y ani.

var friends = person.friends;

for (var i = 0; i < friends.length; i++) {
  var firstFriend = friends[i];

  for (var j = 0; j < friends.length; j++) {
    if (i !== j) {
      var secondFriend = friends[j];

      var ageDiff = Math.abs(firstFriend.age - secondFriend.age);

      console.log(
        `Intre ${firstFriend.name} si ${secondFriend.name} este o diferenta de ${ageDiff} ani.`,
      );
    }
  }
}
