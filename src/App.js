import React from 'react';
import './App.css';
import NotesList from './components/NotesList';
import CreateNoteInput from './components/CreateNoteInput';
import SelectionInfo from './components/SelectionInfo';
import { v4 as uuid } from 'uuid';
import TopMenu from './components/TopMenu';
import SideMenu from './components/SideMenu'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: [
        {id:"0", title:"Note", selected:false, color:"#ffffff", tags:["information","simple_tag"], text:"Notes is an application to keep your notes organized."},
        {id:"1", title:"Another Note", selected:false, color:"#ffffff", tags:["information"], text:"Create notes with your favorite colors and add tags to them to keep them organized."},
        {id:"2", title:"One more note", selected:false, color:"#ffffff", tags:["information"], text:"Use the selection buttom at the upper right corner of the note to add color or delete multiple notes at the same time."},
        {id:"3", title:"About", selected:false, color:"#7878e4", tags:["information"], text:"\nMade with React.js\n\nDeveloper: Andrés Gamboa Alfaro\n\n"},
      ],
      selectedCount:0,
      sideMenuActive:false,
      selectedTag:"All Notes",
      tags: []
    };

    this.state.tags = this.get_tags();

    this.handleNoteAdded = this.handleNoteAdded.bind(this);
    this.handleColorNoteChange = this.handleColorNoteChange.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSelectionCanceled = this.handleSelectionCanceled.bind(this);
    this.handleNoteDeleted = this.handleNoteDeleted.bind(this);
    this.handleDeleteSeleted = this.handleDeleteSeleted.bind(this);
    this.handleColorSelected = this.handleColorSelected.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleTagSelection = this.handleTagSelection.bind(this);
  }

  get_tags() {
    let tags = ["All Notes"];
    this.state.notes.forEach(note => {
      note.tags.forEach(tag=>{
        tags.push(tag);
      })
    });
    return Array.from(new Set(tags))
  }

  handleNoteAdded(note) {
    if (note.text === "") return;

    note.id = uuid().slice(0,8);
    if (note.tags[0] === "") {
      note.tags = [];
    }
    const new_tags = []
    note.tags.forEach(tag=>{
      if (!this.state.tags.includes(tag)) {
        new_tags.push(tag);
      }
    })

    this.setState({
      ...this.state, 
      notes: [...this.state.notes, note], 
      tags:[...this.state.tags, ...new_tags]
    });
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
      ...this.state,
      selectedCount: count,
      sideMenuActive: false,
      notes: notes,
    });
  }

  handleSelectionCanceled() {
    this.setState({
      ...this.state,
      selectedCount: 0,
      notes: this.state.notes.map((note)=>{
        note.selected = false;
        return note;
      })
    })
  }

  handleDeleteSeleted() {
    const notes = this.state.notes.filter(item=>item.selected !== true);
    this.setState({
      ...this.state,
      selectedCount:0,
      notes: notes,
    });
  }

  handleColorSelected(color) {
    const notes = this.state.notes.map(item=>{
      if (item.selected) {
        item.color = color;
      }
      return item;
    });
    this.setState({
      ...this.state,
      notes: notes,
    });
  }

  toggleMenu(){
    this.setState({
      ...this.setState,
      sideMenuActive: !this.state.sideMenuActive
    })
  }

  handleTagSelection(tag) {
    console.log(tag + " selsected")
    this.setState({
      ...this.state,
      selectedTag: tag
    })
  }

  render() {
    return (
      <div className="App">
        <p className="watermark">Developed by Andrés Gamboa Alfaro (2022)</p>
        <TopMenu onOptionsClick={this.toggleMenu} tag={this.state.selectedTag}/>
        <div className="hbox">
          <SideMenu 
            active={this.state.sideMenuActive}
            tags={this.get_tags()}
            onTagSelected={this.handleTagSelection}
          />
          <div className={`margin ${this.state.sideMenuActive?"side-active":""}`}></div>
          <div className="app-container">
              {
                this.state.selectedCount>0 && 
                <SelectionInfo 
                  selected={this.state.selectedCount}
                  onSelectionCanceled={this.handleSelectionCanceled}
                  onDeleteSelected={this.handleDeleteSeleted}
                  onColorSelected={this.handleColorSelected}
                />
              }
              <CreateNoteInput onSubmit={this.handleNoteAdded} tag={this.state.selectedTag}/>
              <NotesList 
                notes = {
                  this.state.selectedTag === "All Notes"?
                  this.state.notes:
                  this.state.notes.filter(note=> {
                    return note.tags.includes(this.state.selectedTag);
                  })
                }
                onNoteColorSelected={this.handleColorNoteChange}
                onNoteSelected={this.handleSelection}
                onNoteDeleted={this.handleNoteDeleted}
              />
            </div>
        </div>
        </div>
    );
  }
}

export default App;
