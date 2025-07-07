import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EjercicioN1 } from './components/ejercicios.reacts/ejercicionN1'
import { EjercicioN2 } from './components/ejercicios.reacts/ejercicioN2'
import { EjercicioN3 } from './components/ejercicios.reacts/ejercicioN3'
import { EjercicioN4 } from './components/ejercicios.reacts/ejercicioN4'
import { EjercicioN5 } from './components/ejercicios.reacts/ejercicioN5'

function App() //el componente es una funcion que devuelve contenido renderizable
//el componente siempre arranca con mayuscula
//mpa install para instalar dependencias
//mpa run dev para correr el programa

{
  const [count, setCount] =useState([])




  return (
  <>
   <EjercicioN5/>

  </>
  )
}

export default App
