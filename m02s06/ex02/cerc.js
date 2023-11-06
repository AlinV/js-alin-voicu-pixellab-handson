let [, , radius = 1] = process.argv;
radius = Number(radius);

console.log(Math.PI * Math.pow(radius, 2));
