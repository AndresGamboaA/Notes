import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPalette, faCheck } from '@fortawesome/free-solid-svg-icons'
import './Note.css';
import ColorSelector from './ColorSelector';

function Note(props) {
   const [isColorsShown, showColors] = useState(false);
  
  const handle_color_selected = (color)=>{
   showColors(false);
   props.onColorSelected(props.note.id, color);
  }
  
  return (
    <div className="note">
       <div className={props.note.selected?"card selected":"card"} style={{backgroundColor:props.note.color}}>
         <button className="select-button" onClick={()=>{
            props.onSelected(props.note.id);
         }}><span className="option-icons"><FontAwesomeIcon icon={faCheck} size="lg" color="black"/></span></button>
            <h3>{props.note.title}</h3>
            <div className="content-container">
               <p>{props.note.text}</p>
            </div>
            <div className="tags">
               {props.note.tags.map(tag=>{
                  return <div key={tag} className="tag">{tag}</div>
               })}
            </div>
            <div className="note-options-container">
               <div className="note-options">
                  <button onClick={()=>{showColors(!isColorsShown)}}><span className="option-icons"><FontAwesomeIcon icon={faPalette} size="lg" color="black"/></span></button>
                  <button onClick={()=>{props.onDeleted(props.note.id)}}><span className="option-icons"><FontAwesomeIcon icon={faTrash} size="lg" color="black"/></span></button>
               </div>
            </div>
         {isColorsShown && <ColorSelector onColorSelected={handle_color_selected}/>}
       </div>
    </div>
  );
}

export default Note;
