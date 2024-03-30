import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponente from './SegundoComponente';
import TercerComponente from './TercerComponente';
import EventosComponente from './EventosComponente';

function App() {

  const ficha_medica = {
    altura: "187 cm",
    grupo: "O+",
    estado: "Bueno",
    alergias: "Ninguna"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en React
        </p>
            <div>
              <hr />
              <EventosComponente />
              <hr />
              <TercerComponente  
              ficha={ficha_medica}
              />
            <hr />
            {/* Cargar MiComponente */}
            <MiComponente />
            <hr />
            <SegundoComponente />
        </div>
      </header>    
    </div>
  );
}

export default App;
