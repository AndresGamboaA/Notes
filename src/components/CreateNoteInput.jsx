import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faEllipsisV, faAdd } from '@fortawesome/free-solid-svg-icons'
import './CreateNoteInput.css'

function CreateNoteInput(props) {
    const [isActive, setActive] = useState("");
    const [title, setTitle] = useState("");
    const [note, setNote] = React.useState("");
    const classes = isActive? "create-note active": "create-note inactive";

    return (
        <div className={classes}>
            {isActive && <button className="add" onClick={()=>{
                props.onSubmit({id:"", color:"#ffffff",tags:[],  title:title, text:note});
                setActive(false);
                setTitle("");
                setNote("");
            }}>
                <span className="option-icons"><FontAwesomeIcon icon={faAdd} size="2x" color="black"/></span>
            </button>}  
            {isActive && <input type="text" placeholder="Title" 
                onFocus={()=>setActive(true)}
                onChange={(e)=>{setTitle(e.target.value)}}
                value={title}
            />}
            <textarea
                placeholder="Create note..."
                onFocus={()=>setActive(true)}
                onChange={(e)=>{ setNote(e.target.value); }}
                onBlur={(e)=>{ console.log("hola")}}
                value={note}>
            </textarea>
            {isActive && <div className="create-note-options-container">
                <button><span className="option-icons"><FontAwesomeIcon icon={faPalette} size="lg" color="black"/></span></button>
                <button><span className="option-icons"><FontAwesomeIcon icon={faEllipsisV} size="lg" color="black"/></span></button>
            </div>}
        </div>
    )
}

export default CreateNoteInput;
