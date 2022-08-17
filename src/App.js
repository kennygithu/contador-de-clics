import logo from './logo.svg';
import './App.css';
import Logowalleworld from './imagenes/logow.png';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import {useState} from 'react';

import React from 'react';  //para importar u hooks. es para asignar estados

//import './hojas-de-estilos/Boton.css';

function App() {
  const [numClics, setNumClics] = useState(0); // ASIGANMOS UN ESDO INICIAL DE 0
  

  const manejarClic = () => {
    setNumClics(numClics +1); //INCREMENTAMOS MAS 1
  }

  const reiniciarContador = () => {
    setNumClics(0);
  } 
  return (
    <div className="App">
       <div className='logow-contedor'>
        <img 
          className='logow'
          src={Logowalleworld}
          alt="logo de walleworld" />
       </div>

       <div className='contenedor-principal'>
        <Contador
        numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
          

       </div>
        

    </div>
  );
}

export default App;
