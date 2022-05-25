import React, { Component } from 'react';
import CardNota from './card-nota';

class ListaNotas extends Component{
    render(){
        return(
            <ul>
                {
                  Array.of("Estudo", "Estudo", "Trabalho").map((categoria, index) => {
                    return(
                      <li key={index}>
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