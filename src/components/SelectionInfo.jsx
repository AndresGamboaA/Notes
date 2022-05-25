import React from "react";
import './SelectionInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPalette, faTrash } from '@fortawesome/free-solid-svg-icons'
import ColorSelector from './ColorSelector';
import { useState } from 'react';


function SelectionInfo(props) {
  const [isColorsShown, showColors] = useState(false);

  const handle_color_selected = (color)=>{
    showColors(false);
    props.onColorSelected(color);
   }

  return (
    <div className="selection-info">
        <div className="info">
            <button onClick={()=>props.onSelectionCanceled()}>
                <span className="option-icons"><FontAwesomeIcon icon={faXmark} size="2x" color="black"/></span>
            </button>
            <h3>{`${props.selected} ${props.selected===1?"note":"notes"} selected`}</h3>
        </div>
        <div className="options">
            <button onClick={()=>{showColors(!isColorsShown)}}><span className="option-icons"><FontAwesomeIcon icon={faPalette} size="lg" color="black"/></span></button>
            <button onClick={()=>{props.onDeleteSelected()}}><span className="option-icons"><FontAwesomeIcon icon={faTrash} size="lg" color="black"/></span></button>
        </div>
        {isColorsShown && <ColorSelector onColorSelected={handle_color_selected}/>}
    </div>
  );
}

export default SelectionInfo;