console.warn(`
1. In fisierul app.js Ben ar trebui sa aiba 29 de ani, iar Larry 20.
   Folosind operatorul spread, creeaza obiecte de tipul fullPerson1 si fullPerson2 care sa reflecte acest lucru.
2. Folosind noul obiect fullPerson2, creeaza un obiect numit fullPerson3 cu numele de familie al lui Ben,
   si numele Carl, care sa aiba 24 de ani.
`);

let person1 = {
  name: 'Larry',
  surname: 'Larryson',
};

let person2 = {
  name: 'Ben',
  surname: 'Benson',
};

let age1 = {
  age: 20,
};

const fullPerson1 = { ...person1, ...age1 };
const fullPerson2 = { ...person2, age: 29 };
const fullPerson3 = { ...fullPerson2, age: 24, name: 'Carl' };
console.log(fullPerson2);
console.log(fullPerson3);
