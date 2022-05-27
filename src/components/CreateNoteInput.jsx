import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./CreateNoteInput.css";
import ColorSelector from "./ColorSelector";

function CreateNoteInput(props) {
   const [state, setState] = useState({
      title: "",
      note: "",
      colorsVisible: false,
      color: "#FFFFFF",
      tags: props.tag,
      active: false,
   });

   useEffect(() => {
      setState(prevState => ({
         ...prevState,
         tags: props.tag === "All Notes" ? "" : props.tag 
      }))
   }, [props])

   const handleColorSelected = (color) => {
      setState({ ...state, color: color, colorsVisible: false });
   };

   const handleChange = ({ target: { name, value } }) => {
      setState({ ...state, [name]: value });
   };

   const restart = () => {
      setState({
         active: false,
         title: "",
         note: "",
         color: "#FFFFFF",
         colorVisible: false,
         tags: props.tag === "All Notes" ? "" : state.tags,
      });
   };

   const classes = state.active ? "create-note active" : "create-note inactive";

   return (
      <div className={classes} style={{ backgroundColor: state.color }}>
         {state.active && (
            <input
               type="text"
               name="title"
               placeholder="Title"
               onFocus={() => setState({ ...state, active: true })}
               onChange={(e) => {
                  handleChange(e);
               }}
               value={state.title}
            />
         )}
         <textarea
            name="note"
            placeholder="Create note..."
            onFocus={() => {
               setState({ ...state, active: true });
            }}
            onChange={(e) => {
               handleChange(e);
            }}
            value={state.note}
         ></textarea>
         {state.active && (
            <input
               onChange={(e) => {
                  handleChange(e);
               }}
               name="tags"
               value={state.tags}
               placeholder="Tags: Tag1 tag2"
            />
         )}
         {state.active && (
            <div className="create-note-options-container">
               <div>
                  <button
                     className="action"
                     onClick={() => {
                        props.onSubmit({
                           id: "",
                           color: state.color,
                           tags: state.tags.split(" "),
                           title: state.title,
                           text: state.note,
                        });
                        restart();
                     }}
                  >
                     Add
                  </button>
                  <button
                     className="action"
                     onClick={() => {
                        restart();
                     }}
                  >
                     Close
                  </button>
               </div>
               <div>
                  <button>
                     <span
                        onClick={() => {
                           setState({...state, colorsVisible:true})
                        }}
                        className="option-icons"
                     >
                        <FontAwesomeIcon
                           icon={faPalette}
                           size="lg"
                           color="black"
                        />
                     </span>
                  </button>
               </div>
               {state.colorsVisible && (
                  <ColorSelector onColorSelected={handleColorSelected} />
               )}
            </div>
         )}
      </div>
   );
}

export default CreateNoteInput;
