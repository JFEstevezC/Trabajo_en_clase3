import './App.css'
import Titulo from './components/Titulo' 
import Buton from './components/Buton'
import Profile from './components/Profile'
import MisDatos from './components/MisDatos'
import { useState } from "react";  
import { PerfilProvider } from './context/PerfilContext' 
import BotonRolPersonaje from './components/BotonRolPersonaje'


function App() {

  const logueado = true

  const [count, setCount] = useState(0);
  
      function handleClick(){
          setCount(count +1);
      }

  return(
    <>
      <PerfilProvider>
        <div>
          <Titulo></Titulo>
          <Profile></Profile>
          <Buton count={count} onClick={handleClick}></Buton>
          <Buton count={count} onClick={handleClick}></Buton>
          <br/>
          <BotonRolPersonaje></BotonRolPersonaje>
          <br></br>
          <div>
            {logueado ? <MisDatos />:<p>No estás logueado</p> }
          </div>
        </div>
      </PerfilProvider>
    </>    

  )
}

export default App
