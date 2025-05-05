const arrayNumeros = [1, 2, 3, 4, 5, 6];

//metodos

//push(valor) -> Agrega un elemento al final del arreglo (append de python)
arrayNumeros.push(10);
console.log(arrayNumeros[6]);

//pop() elimina el ultimo elemento de un arreglo y lo guarda
//en una variable
const ultimo = arrayNumeros.pop();
console.log("ultimo", ultimo);

console.log(arrayNumeros);

//shift() elimina el primer valor de un arreglo, tambien lo guarda
const primero = arrayNumeros.shift();
console.log(primero);

//unshift(valor) Agrega un elemento al principio del arreglo
arrayNumeros.unshift("fede");
console.log(arrayNumeros);

//map(funcion) Crea un nuevo arreglo aplicando una funcion
// a cada elemento
const nuevoArreglo = arrayNumeros.map((item, index) => {
  console.log(index);
  return item + 1;
});
console.log(nuevoArreglo);

//filter Crea un nuevo array con los elementos que cumplan la
//condicion

const pares = arrayNumeros.filter((n) => n % 2 === 0);
console.log(pares);

//forEach solamente recorre un arreglo
//podemos ver item, index y array completo

arrayNumeros.forEach((item, index, array) => console.log(item, index, array));



