import React, { Component } from 'react';
import FormularioCadastro from './Components/form-cadastro/form-cadastro';
import ListaNotas from './Components/lista-notas/lista-notas';
import './assets/App.css';
import './assets/index.css';

class App extends Component{
  render(){
    return (
      <section className='conteudo'>
        <FormularioCadastro />
        <ListaNotas />
      </section>
    );
  }
}

export default App;
