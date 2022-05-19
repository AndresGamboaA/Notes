import React from 'react';
import './App.css';
import NotesList from './components/NotesList';
import CreateNoteInput from './components/CreateNoteInput'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {id:"3", title:"1 Compras", color:"#ffffff", tags:["tag1","tag2", "Compras", "Proyecto", "Trabajo", "Vacaciones"], text:"Terminar proyecto 1 para el 34 de abril de 1887. Los trabajos deben ser escritos en una maquina de escribir de la marca Hsds, de lo contrario, se descartaran las asignaciones para nuevos contratos."},
      ]
    };
    this.handleNoteAdded = this.handleNoteAdded.bind(this);
  }

  handleNoteAdded(note) {
    if (note.text === "") return;
    this.setState({ notes: [...this.state.notes, note] });
  }

  handleColorNoteChanged(id) {
    
  }

  render() {
    return (
      <div className="App">
       <div className="app-container">
        <CreateNoteInput onSubmit={this.handleNoteAdded}/>
        <NotesList notes={this.state.notes}/></div>
      </div>
    );
  }
}

export default App;
