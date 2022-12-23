import './App.css';

import logo from './img/logo.png';
import Boton from './components/boton';
import Contador from './components/contador';
import { useState } from 'react';

function App() {

  const [numero,setnumero] = useState(0);

  const Manejar = () => {
    setnumero(numero+1);
  }
  const Reiniciar = () => {
    setnumero(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
       <img 
       className='freecodecamp-logo'
       src={logo}
       alt='logo'
       /> 
       
        </div>   
        <div className='contenedor-principal'>
       <Contador numero={numero} />

        <Boton
        Texto='Click'
        Boton={true}
        Manejar={Manejar}/>
        <Boton
        Texto='Reiniciar'
        Boton={false}
        Manejar={Reiniciar}/>
       </div>  
    </div>
  );
}

export default App;
