import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { useState } from 'react';

function App() {
  const [Dark,setDark]= useState(false)

  const ModeDark = () =>{
    document.documentElement.classList.toggle('dark')
    setDark(!Dark)
  }

  const Text = Dark ? 'Modo Oscuro' : 'Modo Claro'


  return (
    <div className="App dark:bg-black bg-blue-700 min-h-screen">
      <Header
      text={Text}
      Funcion={ModeDark}
      />
    </div>
  );
}

export default App;
