import React from "react";
import './NotesList.css';
import Note from './Note';

function NotesList(props) {
  return (
    <div className="notesList">
      {props.notes.map(note => {
        return (
          <Note 
            key={note.id} 
            note={note} 
            onColorSelected={props.onNoteColorSelected}
            onSelected={props.onNoteSelected}
            onDeleted={props.onNoteDeleted}
          />)
      })}
    </div>
  );
}

export default NotesList;
