import React from "react";
import './SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

function SideMenu(props) {
    return (
        <div className={`side-menu ${props.active?"side-active":""}`}>
            {props.tags.map(tag=>{
                return (
                    <a key={tag} onClick={()=>props.onTagSelected(tag)}>
                        <span><FontAwesomeIcon icon={faTag} size="lg" color="black"/></span>
                        <div>{tag}</div>
                    </a>
                )
            })}
        </div>
    )
}

export default SideMenu;