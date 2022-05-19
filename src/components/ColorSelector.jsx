import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './ColorSelector.css'

function ColorSelector(props) {
   return (
       <div className="selector">
           <button onClick={()=>{props.onColorSelected("#f28b82")}} style={{backgroundColor:"#f28b82"}} className="color"></button>
           <button style={{backgroundColor:"#fbbc04"}} className="color"></button>
           <button style={{backgroundColor:"#fbbc04"}} className="color"></button>
           <button style={{backgroundColor:"#cc#90"}} className="color"></button>
           <button style={{backgroundColor:"#a7#eb"}} className="color"></button>
           <button style={{backgroundColor:"#cbf0f8"}} className="color"></button>
           <button style={{backgroundColor:"#aecbfa"}} className="color"></button>
           <button style={{backgroundColor:"#d7aefb"}} className="color"></button>
           <button style={{backgroundColor:"#fdcfe8"}} className="color"></button>
           <button style={{backgroundColor:"#e6c9a8"}} className="color"></button>
           <button style={{backgroundColor:"#e8eaed"}} className="color"></button>
           <button style={{backgroundColor:"#ffffff"}} className="color"></button>
       </div>
   ) 
}

export default ColorSelector;
