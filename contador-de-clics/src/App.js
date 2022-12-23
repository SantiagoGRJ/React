import './App.css';

import logo from './img/logo.png';
import Boton from './components/boton';
import Contador from './components/contador';

function App() {

  const Manejar = () => {
    console.log("Click");
  }
  const Reiniciar = () => {
    console.log("Reiniciar");
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
       <Contador numero='5' />

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
