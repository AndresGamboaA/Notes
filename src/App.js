import React from 'react';
import './App.css';
import NotesList from './components/NotesList';
import CreateNoteInput from './components/CreateNoteInput';
import SelectionInfo from './components/SelectionInfo';
import { v4 as uuid } from 'uuid';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: [
        {id:"0", title:"Note #1", selected:false, color:"#ffffff", tags:["tag1","tag2"], text:"Add colorful notes and keep everything organized with tags."},
        {id:"1", title:"Note #2", selected:false, color:"#ffffff", tags:["tag1","tag2"], text:"Notes are a helpful way of remembering all kind of important stuffs, Use notes will keep you productive."},
      ],
      selectedCount:0
    };

    this.handleNoteAdded = this.handleNoteAdded.bind(this);
    this.handleColorNoteChange = this.handleColorNoteChange.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSelectionCanceled = this.handleSelectionCanceled.bind(this);
    this.handleNoteDeleted = this.handleNoteDeleted.bind(this);
    this.handleDeleteSeleted = this.handleDeleteSeleted.bind(this);
  }

  handleNoteAdded(note) {
    if (note.text === "") return;
    note.id = uuid().slice(0,8);
    this.setState({...this.state, notes: [...this.state.notes, note]});
  }

  handleNoteDeleted(id) {
    const notes = this.state.notes.filter(item=>item.id !== id);
    this.setState({
      ...this.state,
      notes: notes,
    });
  }

  handleColorNoteChange(id, color) {
    const index = this.state.notes.findIndex(el => el.id === id);
    const notes = [...this.state.notes]
    notes[index].color = color;
    this.setState({
      ...this.state,
      notes: notes,
    });
  }

  handleSelection(id) {
    const index = this.state.notes.findIndex(el => el.id === id);
    const notes = [...this.state.notes];
    let count = this.state.selectedCount;
    if (!notes[index].selected) {
      count+=1;
      notes[index].selected = true;
    }
    else {
      count-=1;
      notes[index].selected = false;
    }

    this.setState({
      selectedCount: count,
      todos: notes,
    });
  }

  handleSelectionCanceled() {
    this.setState({
      selectedCount: 0,
      notes: this.state.notes.map((note)=>{
        note.selected = false;
        return note;
      })
    })
  }

  handleDeleteSeleted() {
    console.log("delete")
    const notes = this.state.notes.filter(item=>item.selected !== true);
    this.setState({
      selectedCount:0,
      notes: notes,
    });
  }

  render() {
    return (
      <div className="App">
       <p className="watermark">Developed by Andrés Gamboa Alfaro (2022)</p>
       <div className="app-container">
          {
            this.state.selectedCount>0 && 
            <SelectionInfo 
              selected={this.state.selectedCount}
              onSelectionCanceled={this.handleSelectionCanceled}
              onDeleteSelected={this.handleDeleteSeleted}
            />
          }
          <CreateNoteInput onSubmit={this.handleNoteAdded}/>
          <NotesList 
            notes={this.state.notes} 
            onNoteColorSelected={this.handleColorNoteChange}
            onNoteSelected={this.handleSelection}
            onNoteDeleted={this.handleNoteDeleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
