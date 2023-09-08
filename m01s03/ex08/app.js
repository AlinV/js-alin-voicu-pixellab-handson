var cart = {
  id: 'cart-id-12345',
  ownerId: 'user-id-54321',
  firstName: 'Alin',
  lastName: 'Voicu',
  email: 'js@gmail.com',
  products: [
    {
      id: 'product-id-0',
      name: 'Mouse',
      price: 200,
      quantity: 2,
    },
    {
      id: 'product-id-1',
      name: 'Keyboard',
      price: 480,
      quantity: 1,
    },
    {
      id: 'product id-2',
      name: 'Keyboard Mat',
      price: 119,
      quantity: 1,
    },
  ],
};

console.log(
  'Numele meu este ' +
    cart.firstName +
    ' ' +
    cart.lastName +
    ' iar emailul meu este: ' +
    cart.email +
    '.',
);

console.log(
  'Utilizatorul cu idul ' +
    cart.ownerId +
    ' are ' +
    cart.products.length.toString() +
    ' tipuri de produse in cartul cu idul ' +
    cart.id +
    '.',
);

console.log(
  cart.firstName + ' ' + cart.lastName + ' cumpara ' + ' produse in total',
);

console.log(
  'Al treilea produs pe care il cumpara ' +
    cart.firstName +
    ' este ' +
    cart.products[2].name +
    '.',
);

console.log(
  cart.firstName +
    ' ' +
    cart.lastName +
    ' cumpara ' +
    (
      cart.products[0].quantity +
      cart.products[1].quantity +
      cart.products[2].quantity
    ).toString() +
    ' produse in total.',
);

console.log(
  'Sunt ' +
    cart.firstName +
    ' si cumpar produsele ' +
    cart.products[0].name +
    ', ' +
    cart.products[1].name +
    ' si ' +
    cart.products[2].name +
    '.',
);

console.log(
  'Valoarea totala a cartului cu idul ' +
    cart.id +
    ' este ' +
    (
      cart.products[0].price * cart.products[0].quantity +
      cart.products[1].price * cart.products[1].quantity +
      cart.products[2].price * cart.products[2].quantity
    ).toString() +
    '.',
);

console.log(
  cart.firstName +
    ' ' +
    cart.lastName +
    ' a cumparat produsul ' +
    cart.products[0].name +
    ' in cantitatea ' +
    cart.products[0].quantity +
    ' in valoare totala de ' +
    cart.products[0].price * cart.products[0].quantity +
    '.',
);
