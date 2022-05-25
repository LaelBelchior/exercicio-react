import React, { Component } from 'react';
import CardNota from '../card-nota/card-nota';
import './style.css';

class ListaNotas extends Component{
    render(){
        return(
            <ul className='lista-notas'>
                {
                  Array.of("Estudo", "Estudo", "Trabalho").map((categoria, index) => {
                    return(
                      <li className="lista-notas_item" key={index}>
                        <div>{categoria}</div>
                        <CardNota />
                      </li>
                    )
                  })
                }
            </ul>
        )
    }
}

export default ListaNotas;