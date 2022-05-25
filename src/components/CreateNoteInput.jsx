import React, {useEffect, useState} from "react";
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
    const [tags, setTags] = useState(props.tag);

    useEffect(()=>{
        setTags(props.tag==="All Notes"?"":props.tag);
    }, [props.tag]);

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
            {isActive && <input
                onChange={(e)=>{setTags(e.target.value)}}
                value={tags}
                placeholder="Tags: Tag1 tag2"
            />}
            {isActive && <div className="create-note-options-container">
                <div >
                     <button className="action" onClick={()=>{
                        props.onSubmit({id:"", color:color,tags:tags.split(" "),  title:title, text:note});
                        setActive(false);
                        setTitle("");
                        setNote("");
                        setColor("#FFFFFF");
                        if (props.tag === "All Notes") {
                            setTags("");
                        }
                     }}>Add</button>
                     <button className="action" onClick={()=>{
                        setActive(false);
                        setTitle("");
                        setNote("");
                        setColor("#FFFFFF");
                        if (props.tag === "All Notes") {
                            setTags("");
                        }
                     }}>Close</button>
                </div>
                <div>
                    <button><span onClick={()=>{showColors(true)}} className="option-icons"><FontAwesomeIcon icon={faPalette} size="lg" color="black"/></span></button>
                </div>
                {isColorsShown && <ColorSelector onColorSelected={handle_color_selected}/>}
                
            </div>}
        </div>
    )
}

export default CreateNoteInput;
