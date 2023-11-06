const fs = require('fs');
const another = fs.readFileSync('./another.txt', 'utf-8');
const myFile = fs.readFileSync('./my-file.txt', 'utf-8');
const thisOtherFile = fs.readFileSync('./dir/this-other-file.txt', 'utf-8');

console.log(another + ' ' + myFile + ' ' + thisOtherFile + '.');
