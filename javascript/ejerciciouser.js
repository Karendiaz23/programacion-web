//🧪 Ejercicio: Falso Login + Lista de Empleados//

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

function verificarLogin() {
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
  } else {
    error.textContent = "datos incorrectos";
  }

  //C//es el codigo de arriba el async funtion

  obtenerDatos();
}
