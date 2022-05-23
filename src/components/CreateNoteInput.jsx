import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './CreateNoteInput.css'
import ColorSelector from './ColorSelector';

function CreateNoteInput(props) {
    const [isActive, setActive] = useState("");
    const [title, setTitle] = useState("");
    const [note, setNote] = React.useState("");
    const [isColorsShown, showColors] = useState(false);
    const [color, setColor] = useState("#FFFFFF");
  
    const handle_color_selected = (color)=>{
     showColors(false);
     setColor(color)
    }

    const classes = isActive? "create-note active": "create-note inactive";

    return (
        <div className={classes} style={{backgroundColor:color}}>
            {isActive && <input type="text" placeholder="Title" 
                onFocus={()=>setActive(true)}
                onChange={(e)=>{setTitle(e.target.value)}}
                value={title}
            />}
            <textarea
                placeholder="Create note..."
                onFocus={()=>{
                    setActive(true)
                }}
                onChange={(e)=>{ setNote(e.target.value) }}
                value={note}>
            </textarea>
            {isActive && <div className="create-note-options-container">
                <div >
                     <button className="action" onClick={()=>{
                        props.onSubmit({id:"", color:color,tags:[],  title:title, text:note});
                        setActive(false);
                        setTitle("");
                        setNote("");
                        setColor("#FFFFFF");
                     }}>Add</button>
                     <button className="action" onClick={()=>{
                        setActive(false);
                        setTitle("");
                        setNote("");
                        setColor("#FFFFFF");
                     }}>Close</button>
                </div>
                <div>
                    <button><span onClick={()=>{showColors(true)}} className="option-icons"><FontAwesomeIcon icon={faPalette} size="lg" color="black"/></span></button>
                    <button><span className="option-icons"><FontAwesomeIcon icon={faEllipsisV} size="lg" color="black"/></span></button>
                </div>
                {isColorsShown && <ColorSelector onColorSelected={handle_color_selected}/>}
            </div>}
        </div>
    )
}

export default CreateNoteInput;
