import React from 'react';
import ListaNotas from './Components/lista-notas';

function App() {
  return (
    <section>
      <form>
        <input type="text"/>
        <textarea placeholder='Escreva sua nota...'/>
        <button>ENVIAR NOTA</button>
      </form>
      <ListaNotas />
    </section>
  );
}

export default App;
