import logo from "./logo.svg";
import "./App.css";
import Primero from "./components/primero";

function App() {
  return (
    <div className="App">
      <Primero nombre="Santiago" edad="15" />

      <Primero nombre="Javier" edad="13" />
    </div>
  );
}

export default App;
