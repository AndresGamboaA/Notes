import React from "react";
import './ColorSelector.css'

function ColorSelector(props) {
    const colors = [
        "#f28b82",
        "#fbbc04",
        "#FFF574",
        "#CCFE91",
        "#A7FEEA",
        "#CAF1F8",
        "#aecbfa",
        "#d7aefb",
        "#fdcfe8",
        "#e6c9a8",
        "#e8eaed",
        "#FFFFFF"
    ]

    return (
        <div className="selector">
            {colors.map((color)=> {
                return(
                <button 
                    onClick={()=>{props.onColorSelected(color)}} 
                    style={{backgroundColor:color}} 
                    className="color">    
                </button>)
            })}
        </div>
    )
}

export default ColorSelector;
