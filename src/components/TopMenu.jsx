import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import "./TopMenu.css"
function TopMenu({ tag, onOptionsClick }) {
    return (
        <div className="top-menu">
            <button onClick={()=>onOptionsClick()}><span className="menu-button"><FontAwesomeIcon icon={faBars} size="lg" color="black"/></span></button>
            <h1>{ tag }</h1>
        </div>
    )
}

export default TopMenu;
