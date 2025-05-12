// activida de manipulacion-DOM//


let lista = [];

function agregarUnaTarea(){
const input= document.getElementById("input-task");
const text = input.value;
console.log(text);


const obj =  {task:text, completed:false};
if (text !==""){
    lista.push(obj);
  } 




const list = document.getElementById("listaTareas")


//crear elemento html

const li = document.createElement("li")
li.textContent= obj.task;
//
const botonDelete=document.createElement("button")
botonDelete.textContent = "Delete"

list.append(li, botonDelete);

//esta mal hecho hacer la clase que viene //
if (obj.completed ===true){
    botonDelete.onclick(()=>{
        li.removeChild
    })
}


}
