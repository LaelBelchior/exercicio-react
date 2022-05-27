import React, { Component } from 'react';
import FormularioCadastro from './Components/form-cadastro/form-cadastro';
import ListaNotas from './Components/lista-notas/lista-notas';
import './assets/App.css';
import './assets/index.css';

class App extends Component{

  criarNota(titulo, texto){
    console.log(`aaaaaaaaa ${titulo} aaaaa ${texto}`)
  }  

  render(){
    return (
      <section className='conteudo'>
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaNotas />
      </section>
    );
  }
}

export default App;
