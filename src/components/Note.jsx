import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPalette, faCheck } from '@fortawesome/free-solid-svg-icons'
import './Note.css'

function Note(props) {
  return (
    <div className="note" style={{backgroundColor:props.note.color}}>
      <button className="select-button"><span className="option-icons"><FontAwesomeIcon icon={faCheck} size="lg" color="black"/></span></button>
      <h3>{props.note.title}</h3>
      <div className="content-container">
          <p>{props.note.text}</p>
      </div>
      <div className="tags">
        {props.note.tags.map(tag=>{
          return <div className="tag">{tag}</div>
        })}
      </div>
      <div className="note-options-container">
        <div className="note-options">
         <button><span className="option-icons"><FontAwesomeIcon icon={faPalette} size="lg" color="black"/></span></button>
          <button><span className="option-icons"><FontAwesomeIcon icon={faEllipsisV} size="lg" color="black"/></span></button>
        </div>
      </div>
    </div>
  );
}

export default Note;
