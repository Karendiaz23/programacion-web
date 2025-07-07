import { useEffect,useState } from "react";

export function EjercicioN4 (){
    const[mensaje,setMensaje]=useState("cargando...");

    const id=setTimeout(()=>setMensaje("listo"),(3000));

     return (
      <div className="EjercicioN4">
      <h1>{mensaje}</h1>

      </div>
  );


}