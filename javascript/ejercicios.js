// Ejercicio n1// NIVEL UNO BASICO//
const numero = 15;
if (numero > 10) {
  console.log("El número es mayor a 10.");
}

//ejercicio n2//
const numero1 = 5;
const numero2 = 13;

if (numero1 > numero2) {
  console.log("El número {numero1} es mayor que {numero2}.");
} else if (numero2 > numero1) {
  console.log("El número {numero2} es mayor que {numero1}.");
} else {
  console.log("Ambos números son iguales.");
}

//WHILE//

// Ejercicio 1//

let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++;
}

//ejercicio n2//

let number = 1;
let suma = 0;

while (number <= 4) {
  suma += number;
  number++;
}
console.log(`la suma del 1 al 4 es ${suma}`);

//FOR//

//EJERCICIO N1//

for (let i = 0; i <= 4; i++) {
  console.log(i);
}

//ejercicio n2//

let sum = 0;

for (let i = 0; i <= 4; i++) {
  sum += i;
}

console.log(`La suma de los números del 0 al 4 es: ${suma}`);

//NIVEL 2 DIFICULTAD MEDIA//

// Ejercicio 1//

const numero0 = 0; //cambiar este numero para probar//

if (numero0 < 0) {
  console.log("Negativo");
} else if (numero0 === 0) {
  console.log("Cero");
} else {
  console.log("Positivo");
}

//ejercicio 2//
let contadorr = 0;

while (contadorr < 10) {
  contadorr++;
  if (contadorr === 5) {
    continue; // contnue sigue con la ejecucion del bucle ,el break lo corta//
  }

  console.log(contadorr);
}

//FOR//

//EJERCICIO N1//

let sumar = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    // Si el número es par
    sumar += i;
  }
}

console.log("La suma de los números pares del 1 al 10 es:", sumar);

// Análisis de Números //NIVEL 3// INTEGRADOR//

// Array definido
let numeross = [3, 7, 2, 8, 5, 6, 1, 9, 4, 0];

let sumaMayores = 0;
let contadorMenores = 0;

for (let i = 0; i < numeross.length; i++) {
  if (numeross[i] > 5) {
    sumaMayores += numeross[i];
  } else {
    contadorMenores++;
  }
}
console.log("Suma de números mayores a 5: " + sumaMayores);
console.log("Cantidad de números menores o iguales a 5: " + contadorMenores);
while (sumaMayores >= 0) {
  console.log(sumaMayores);
  sumaMayores--;
}
