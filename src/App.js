import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const clicHandler = () => {
    // console.log("Clic");

    setNumClics(numClics+1);
    return numClics
  }

  const reiniciarContador = () => {
    // console.log("Reiniciar");
    setNumClics(0);
    return numClics
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo de freeCodeCamp'/>
      </div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics}></Contador>
        <Boton texto={"Clic"} esDeClic={true} clicHandler={clicHandler}></Boton>
        <Boton texto={"Reiniciar"} esDeClic={false} clicHandler={reiniciarContador}></Boton>
      </div>
    </div>
  );
}

export default App;
