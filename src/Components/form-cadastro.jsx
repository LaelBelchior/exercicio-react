import React, { Component } from 'react';

class FormularioCadastro extends Component{
    render(){
        return(
            <form>
                <input type="text"/>
                <textarea placeholder='Escreva sua nota...'/>
                <button>ENVIAR NOTA</button>
            </form>
        )
    }
}

export default FormularioCadastro;