import logo from './logo.svg';
import './App.css';
import { Navbar} from 'flowbite-react';
import { Boton } from './components/buton';
import { useState } from 'react';
import { Parte } from './components/tablas';
import { Foter } from './components/footer';

function App() {
  
  const [dark,setdark] = useState(true)

  const Modedark = () => {
    document.documentElement.classList.toggle('dark')
    setdark(!dark)
  }
   const Texto = dark ? 'Modo oscuro' : 'Modo claro' 
  
  return (
    <div className="App bg-white dark:bg-slate-900 h-screen"> 
     {/* Comienzo Navbar */}
      <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
    <Navbar.Link >
      <Boton
      modo={Modedark}
      texto={Texto}
      />
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
{/* Fin  Navbar */}
<Parte/>


<Foter/>

    </div>

  );
}

export default App;
