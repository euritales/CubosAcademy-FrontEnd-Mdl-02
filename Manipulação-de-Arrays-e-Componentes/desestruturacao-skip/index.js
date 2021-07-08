const meses = ['janeiro', 'fevereiro', 'março', 'abril'];

const [, fevereiro, marco, abril] = meses; // SKIP fevereiro = 'fevereiro', marco = 'março', abril = 'abril'; 
//const [janeiro, fevereiro, marco, abril] = DESESTRUTURAÇÃO janeiro = 'janeiro', fevereiro = 'fevereiro', marco = 'março', abril = 'abril'; 
//const [janeiro, , , abril] = DESESTRUTURAÇÃO janeiro = 'janeiro', abril = 'abril'; 

// const janeiro = meses[0];
// const fevereiro = meses[1];
// const marco = meses[2];
// const abril = meses[3];

console.log(meses);
//console.log(janeiro);
console.log(fevereiro);
console.log(marco);
console.log(abril);