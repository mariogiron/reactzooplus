import { Component } from 'react';
import './App.css';
// import CicloVida from './components/CicloVida';
// import Formulario from './components/Formulario';
// import Problema1 from './components/Problema1';
// import Problema2 from './components/Problema2';
// import Suma from './components/Suma';
import Condicionales from './components/Condicionales';
import Listas from './components/Listas';

class App extends Component {

  state = {
    contador: 0
  };

  constructor(props) {
    super(props);

    // this.onSumaFinalizada = this.onSumaFinalizada.bind(this);
  }

  onSumaFinalizada = (resultado) => {
    console.log('Suma finalizada ' + resultado);
    this.setState({ contador: this.state.contador + 1 });
  }

  onCuentaTerminada = (contador) => {
    console.log(contador);
  }

  render() {
    return (
      <div className="App" >
        {/* <p>{this.state.contador}</p>
        <Suma numA={3} numB={4} sumaFinalizada={this.onSumaFinalizada} cuentaTerminada={this.onCuentaTerminada} /> 
        <Formulario />*/}
        {/* <CicloVida /> */}
        {/* <Condicionales /> */}
        <Listas />
      </div>
    );
  }
}

export default App;
