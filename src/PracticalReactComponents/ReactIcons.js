import React from 'react';
import { IconContext } from "react-icons";
import { FaHubspot } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { GiSwordwoman } from "react-icons/gi";

function ReactIcons() {
    return (
        <IconContext.Provider value={{ color:'Teal', size:"50px"}}>
                <div className="rCard text-center">
                    <h4>React-Icons</h4>
                    <FaHubspot />
                    <AiFillApple />
                    <GiSwordwoman />
                </div>
        </IconContext.Provider>
    )
}

export default ReactIcons
