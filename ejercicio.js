const arreglo = [1, 2, 3];

// FORMA TONTA
const nuevoArreglo;
arreglo[0] = 2;
arreglo[1] = 4;
arreglo[2] = 6;

console.log(arreglo); // [2, 4, 6]

// FORMA ÓPTIMA (Menos tonta)
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = arreglo[i] * 2;
}

console.log(arreglo); // [2, 4, 6]

// MAP
const nuevoArreglo = arreglo.map(function (elemento) {
  return elemento * 2;
});

console.log(arreglo); // [1, 2, 3]
console.log(nuevoArreglo); // [2, 4, 6]


// FILTER
const arregloGigante = [2, 3, 4, 10, -4, 6, 11, 100, 35424];


const numerosMayor50 = arregloGigante.filter(function (elemento) {
  return elemento > 50;
});

console.log(numerosMayor50); // [100, 35424];

// REDUCE

const numerosMayor60 = [100, 35424, 66, 78];

const suma = numerosMayor60.reduce(function (acumulador, actual) {
  return acumulador + actual;
}, 0);


// Calcula la suma de los cubos de todos los numeros del 1 al 1000 que sean pares. Utiliza MAP, FILTER y REDUCE


// 1. Crear un arreglo con los números del 1 al 1000
let numeros = [];
for (let i = 1; i <= 1000; i++) {
  numeros.push(i);
}

// 2. Mapear el arreglo a otro arreglo con sus cubos
let numerosCubos = numeros.map(function (num) {
  return Math.pow(num, 3);
});

// 3. Filtrar solo los pares
let numerosPares = numerosCubos.filter(function (num) {
  return num % 2 === 0;
});

// 4. Calcular la suma con reduce
let suma = numerosPares.reduce(function (acumulador, actual) {
  return acumulador + actual;
}, 0);

console.log(suma);




// Otra solución

let numeros = [];
for (let i = 1; i <= 1000; i++) {
  numeros.push(i);
}

let suma = numeros.map(num => Math.pow(num, 3))
  .filter(num => num % 2 === 0)
  .reduce((acumulador, actual) => acumulador + actual, 0);













