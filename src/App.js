import React from 'react';
import './App.css';
import NotesList from './components/NotesList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {id:"3", title:"1 Compras", color:"#ffffff", tags:["tag1","tag2", "Compras", "Proyecto", "Trabajo", "Vacaciones"], text:"Terminar proyecto 1 para el 34 de abril de 1887. Los trabajos deben ser escritos en una maquina de escribir de la marca Hsds, de lo contrario, se descartaran las asignaciones para nuevos contratos."},
        {id:"4", title:"2 Compras", color:"#e5c3f9", tags:["tag1","tag2", "Compras", "Proyecto", "Trabajo", "Vacaciones"], text:"Terminar proyecto 1 para el 34 de abril de 1887. Los trabajos deben ser escritos en una maquina de escribir de la marca Hsds, de lo contrario, se descartaran las asignaciones para nuevos contratos. asignaciones para nuevos contratos. asignaciones para nuevos contratos.asignaciones para nuevos contratos.asignaciones para nuevos contratos.asignaciones para nuevos contratos.asignaciones para nuevos contratos."},
      
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <NotesList notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
