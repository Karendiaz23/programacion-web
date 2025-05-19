const boton = document.getElementById("boton");
const listaCompras = document.getElementById("lista-compras");

function agregarProducto() {
  const input = document.getElementById("input-producto");
  const nombreProducto = input.value.trim();

  if (nombreProducto === "") return;

  const li = document.createElement("li");
  li.textContent = nombreProducto;
  listaCompras.append(li);
}

const botonComprado = document.createElement("button");
