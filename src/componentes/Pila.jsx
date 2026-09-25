import {useState} from 'react'

function Pila() {
    const [stack, setStack] = useState([]);
    const [inputValue, setInputValue]=useState("");

    //Agregar valores a la pila o arreglo
    const handlePush=(e)=>{
        e.preventDefault();
        if(inputValue.trim()==="") return;
        setStack([inputValue, ...stack]);
        setInputValue('');
    }

    //Eliminar valores del arreglo pop
    const handlePop=()=>{
        if(stack.length===0) return;

        //Filtrar los elementos y eliminamos el tope de la pila
        const nuevoStack=stack.slice(1);
        setStack(nuevoStack);
    }

    const elementoTope=stack.length>0 ? stack[0]:'La pila esta vacia';
  return (
    <>
<div style={{padding: '20px', fontFamily:'Arial, sans-serif', maxWidth:'400px', margin:'0 auto'}}>
    <h2>Visuzalizar los datos de la Pila</h2>
    {/*Inicializamos el formulario para introducir datos */}
    <form>
        <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder='Introduce un dato' style={{padding:'8px', marginRight:'10px'}}/>
    <button type='submit' style={{padding:'8px 12px', background: '#4CAF50'}}> Push</button>
    </form>
    </div>
    </>
  )
}

export default Pila
