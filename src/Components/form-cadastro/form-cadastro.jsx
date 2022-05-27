import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component{

    constructor(props){
        super(props)
        this.titulo = "";
        this.texto = "";
    }

    handleMudancaTitulo(e){
        this.titulo = e.target.value
        console.log(this.titulo)
    }

    handleMudancaTexto(e){
        this.texto = e.target.value
        console.log(this.texto)
    }

    _criarNota(e){
        e.preventDefault()
        this.props.criarNota(this.titulo, this.texto)
    }

    render(){
        return(
            <form className='form-cadastro' onSubmit={this._criarNota.bind(this)}>
                <input 
                type="text"
                placeholder='Título'
                className='form-cadastro_input'
                onChange={this.handleMudancaTitulo.bind(this)}
                />
                <textarea 
                rows={15}
                className='form-cadastro_input'
                placeholder='Escreva sua nota...'
                onChange={this.handleMudancaTexto.bind(this)}
                />
                <button className='form-cadastro_input form-cadastro_submit'>
                    Criar Nota
                </button>
            </form>
        )
    }
}

export default FormularioCadastro;