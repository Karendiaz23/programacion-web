//setTimeout()
//recibe por parametro una funcion y un valor numerico en milisegundos
const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  setTimeout(() => {
    alert("fui presionado 3 segundos");
  }, 3000);
});

//setInterval()

let contador = 0;
let intervalo = setInterval(() => {
  contador++;
  console.log("Contador:", contador);
}, 1000); //milisegundos

//metodos  para conseguir una api
//get, post, put ,delete

//fetch
//le vamos autilizar para conectarnos/consumir una api
//fetchurl , opciones
//opciones es un opcional ,para pasar un objecto que le diga que tipo
// de un metodo utiliza , encabezado , cuerpo, etc

const array = fetch("https://rickandmortyapi.com/api/character")
  .then((data) => data.json())
  .then((result) => console.log(response.result));

async function getCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    data.results.map((item) => {
      console.log(item);
    });
  } catch (error) {
    console.log(error);
  }
}
getCharacters();
