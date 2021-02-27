import { useState } from 'react';
import './App.css';
import ContextoClase from './components/context/ContextoClase';
import ContextoFuncional from './components/context/ContextoFuncional';
import { LoginProvider } from './components/context/LoginProvider';
import UserContext from './components/context/UserContext';
import Formulario from './components/reducer/Formulario';

function App() {

  // return (
  //   <LoginProvider>
  //     <ContextoFuncional />
  //     {/* <ContextoClase /> */}
  //   </LoginProvider>
  // );

  return <Formulario></Formulario>;

}

export default App;
