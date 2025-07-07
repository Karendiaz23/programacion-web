import { useEffect,useState } from "react";

 export function EjercicioN5() {
  const [nombre, setNombre]= useState("");   
  const [saludo, setSaludo]= useState("");  
  const cambioDeTexto = (e) => setNombre(e.target.value);


  const saludar = () => {
    const texto = nombre.trim()
      ? `¡Hola, ${nombre}!`
      : "¡Hola!";
    setSaludo(texto);
  };

  useEffect(() => {
    if (saludo) {
      console.log("Saludo actualizado");
    }
  

  }
)
   return (
    <div className="EjercicioN5">
      <h1>Ingresa tu nombre</h1>
      <input
        type="text"
        value={nombre}
        onChange={cambioDeTexto}
        placeholder="Tu nombre…"
      />
      <button onClick={saludar}>Saludar</button>
      {saludo && <h2>{saludo}</h2>}
    </div>
  );
}





