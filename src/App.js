import React, { Component } from 'react';
import FormularioCadastro from './Components/form-cadastro/form-cadastro';
import ListaNotas from './Components/lista-notas/lista-notas';
import './assets/App.css';
import './assets/index.css';

class App extends Component{

  constructor(){
    super()
    this.notas = []
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    this.notas.push(novaNota)
  }  

  render(){
    return (
      <section className='conteudo'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaNotas notas={this.notas}/>
      </section>
    );
  }
}

export default App;
