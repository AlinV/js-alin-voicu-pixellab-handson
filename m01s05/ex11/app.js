function calculateSurface() {
  switch (arguments.length) {
    case 1:
      let side = arguments[0];
      return side ** 2;
    case 2:
      const width1 = arguments[0];
      const length1 = arguments[1];
      return width1 * length1;
    case 3:
      const width2 = arguments[0];
      const length2 = arguments[1];
      const height2 = arguments[2];
      return 2 * (width2 * length2 + width2 * height2 + length2 * height2);
    default:
      return 'Numar de argumente invalid';
  }
}

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}
console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

const pet = {
  name: 'Oscar',
  species: 'Jack Russel Terrier',
  age: 9,

  getName: function () {
    return this.name;
  },

  getSpecies: function () {
    return this.species;
  },
  getAge: function () {
    return this.age;
  },
};
const petAge = pet.getAge();

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);
console.log(`Animalul meu are ${petAge} ani.`);
