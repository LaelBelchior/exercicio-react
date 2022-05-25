import React, { Component } from 'react';
import FormularioCadastro from './Components/form-cadastro/form-cadastro';
import ListaNotas from './Components/lista-notas/lista-notas';

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
