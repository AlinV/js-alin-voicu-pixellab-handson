// const { writeFileSync } = require('fs');
// writeFileSync('./my-file.txt', ', azi', 'utf-8');

const { readFileSync } = require('fs');
const fileMessage = readFileSync('./my-file.txt', 'utf-8');

let day = new Date().getDay();
let month = new Date().getMonth();
let year = new Date().getFullYear();
let date = `${day}/${month}/${year}`;
let message = `${fileMessage}, azi, ${date}`;

const { writeFileSync } = require('fs');
message = writeFileSync('./new-file.txt', message);
