import { useState } from "react"

export function EjercicioN1 (){
    const[numero,setNumero]=useState(0);

    const sumar=()=>setNumero(numero+1)
    const restar=()=>setNumero(numero-1)

  return (
    <div className="EjercicioN1">
      <h1>Contador: {numero}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
}
