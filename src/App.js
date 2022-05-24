import React, { Component } from 'react';
import FormularioCadastro from './Components/form-cadastro';
import ListaNotas from './Components/lista-notas';

class App extends Component{
  render(){
    return (
      <section>
        <FormularioCadastro />
        <ListaNotas />
      </section>
    );
  }
}

export default App;
