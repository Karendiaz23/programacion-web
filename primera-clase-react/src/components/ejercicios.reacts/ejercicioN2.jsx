import { useState } from "react"

export function EjercicioN2 (){
    const[texto,setTexto]=useState("");
    
    const cambioDeTexto=(e)=>(setTexto(e.target.value));

  return (
    <div className="EjercicioN2">
      <h1>Escribí algo:</h1>
      <input
        type="texto"
        value={texto}
        onChange={cambioDeTexto}
      />
      {texto}
    </div>
  );

}