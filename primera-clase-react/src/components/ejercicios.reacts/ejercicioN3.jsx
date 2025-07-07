import { useEffect,useState } from "react";

export function EjercicioN3 (){
    const[mensaje,setMensaje]=useState("");
  
 useEffect(() => {
  console.log("Componente montado");
  }
  , []
 )
  return (
    <div className="EjercicioN3">
      <h1>EjercicioN3:mensaje</h1>
      {mensaje}
    </div>
  );






}