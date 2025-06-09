//🧪 Ejercicio: Falso Login + Lista de Empleados//

const { createElement } = require("react");

//a//
const contraseña = "1234";
const usuario = "kareen";
async function obtenerDatos() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerDatos();

async function verificarLogin() {
  const usuarioInput = document.getElementById("usuario").value;
  const contraseñaInput = document.getElementById("contraseña").value;
  //const error = document.getElementById(error).value;

  if (usuario === usuarioInput && contraseña === contraseñaInput) {
    alert("¡Bienvenido, " + usuario + "!");
  } else {
    error.textContent = "Usuario o contraseña incorrectos.";
    return;
  }

  //B//

  if (usuario === usuarioInput && contraseña === contraseñaInput) {
    localStorage.setItem("sesion", usuarioInput);
    const lista = await obtenerDatos();
    lista.forEach((empleado) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    });
    
  } else {
    error.textContent = "datos incorrectos";
  }

  //C//es el codigo de arriba el async funtion

}

{
   

}
