import { useEffect, useState } from "react";

function App() {
  //Iniciamos con un estado para un arreglo
  const [elementos, setEelementos]=useState([]);

  //crear funcion para agregar datos
  const agregarDato=()=>{
    const nuevoNumero = Math.floor(Math.random()*50);
    setEelementos([...elementos, nuevoNumero]);
  };

  //Metodo para recorrer el arreglo
  const recorrerArreglo=(elemento,index)=>(
    <li key={index} style={{margin: '5px 0',
    fontsize:'18px'}}>
      Elemento #{index+1}:<strong>{elemento}</strong>
      </li>
  )
  

  //Hook de efecto
  useEffect(()=>{
console.log("El arreglo de datos actual es: ",elementos);
  },[elementos])
  return (
    <>
    <h1>Mi primer arreglo de datos</h1>
    <div style={{padding:'20px'}}>
    <h2>Paso 1. Agregar datos al arreglo</h2>
    <button onClick={agregarDato}>Agregar numero aleatorio</button>
    <ul>
      {/* Si elarreglo esta vacio  enviar un mensaje */}

      {elementos.length===0?(
        <>
        <p>Aun no hay elementos en el arreglo</p>
        <p>Presiona el boton agregar datos</p>
        </>
      ):(elementos.map(recorrerArreglo))}
      
      </ul>
    </div>
    </>
  )
}

export default App
