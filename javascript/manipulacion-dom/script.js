//manipulacion de DOM
//nos permite a interactuar con un documento
//modificar su estructura, estilo y contenido


//seleccion de elementos
//por ID 
let titulo = document.getElementById("titulo");
console.log(titulo.innerText);

//por clase (Query Selector)
let parrafo = document.querySelector(".parrafo");


//modificacion de contenido

titulo.innerHTML = "lista de tareas";
parrafo.textContent = "nuevo texto en el parrafo";

//eventos (addventListener , onClick , onChange)

let boton = document.getElementById("boton");
boton.addEventListener("click", function (){
    alert("boton clickeado")
    titulo.innerHTML = "este es el nuevo titulo modificado";
}
);


let tarea = document.getElementById("taskButton").value;